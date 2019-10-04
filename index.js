const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI5MzAwNDc2NTIwNjkzODE5.XZdEDQ.L57ny_N_CObSsELx3iUKNhk3FyQ';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('-help');

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '-help':
            if(!message.member.roles.find(r => r.name === "MEMBER")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
            const embed = new Discord.RichEmbed()
            .setTitle('Randy')
            .setColor(0x2DFBD1)
            .addField('-rules (Shows the rules) \n -shop (Shows the shop link) \n -infos (Shows the informations about the bot)',message.author.username)
            message.channel.sendEmbed(embed);
        break;
        
        
    }
})

bot.on('ready', () =>{
    console.log('This bot is online');
    bot.user.setActivity('-shop');

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '-shop':
            if(!message.member.roles.find(r => r.name === "MEMBER")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
            const embed = new Discord.RichEmbed()
            .setTitle('Randy')
            .setColor(0x2DFBD1)
            .addField('https://shoppy.gg/@bencepaskuly',message.author.username)
            message.channel.sendEmbed(embed);
        break;
        
        
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '-rules':
            if(!message.member.roles.find(r => r.name === "MEMBER")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
            const embed = new Discord.RichEmbed()
            .setTitle('Randy')
            .setColor(0xFF0000)
            .addField('# 1. No NSFW contect outside general. \n # 2. Do not spam. \n # 3. Do not beg for roles \n # 4. Do not ping the admins and owners \n # 5. No selling in general', message.author.username)
            message.channel.sendEmbed(embed);
        break;
        
        
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '-infos':
            if(!message.member.roles.find(r => r.name === "MEMBER")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
            const embed = new Discord.RichEmbed()
            .setTitle('Randy')
            .setColor(0x2DFBD1)
            .addField('Version: v1.0.0 \n Created by: wtfzoxa#4630',message.author.username)
            message.channel.sendEmbed(embed);
        break;
        
        
    }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch (args[0]) {
        case '-kick':
            if(!message.member.roles.find(r => r.name === "ADMIN")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
            if(!args[1]) message.channel.send('You need to specify a person!')
        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.kick('You were kicked from the server!').then(()=>{
                    message.reply(`Succesfully kicked ${user.tag}`);
                }).catch(err =>{
                    message.reply('I was unable to kick the member');
                    console.log(err);
                });
            } else{
                message.reply("That user isn\'t in this server!")
            }
        } else {
            message.reply('That user isn\'t in the server')
        }

        break;
    }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch (args[0]) {
        case '-ban':
            if(!message.member.roles.find(r => r.name === "ADMIN")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member) {
               member.ban({reason: 'You were banned from the server!'}).then(() =>{
                    message.reply(`Succesfully banned! ${user.tag}`)
               })
            } else {
                message.reply("That user isn\'t in this server!")
            }
        } else {
            message.reply('You need to specify a person!')
        }

        break;
    }


});
bot.login(token);