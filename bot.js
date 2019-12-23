const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjU4NTE5MTAxNTU1MDgxMjE4.XgA8Gg.5WHKM0fGFCTuMEhnpaowpCOIk1I);//BOT_TOKEN is the Client Secret
