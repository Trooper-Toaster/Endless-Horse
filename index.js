const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (msg.content === ';horse') {
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
    let horse = msg.guild.channels.find(`name`,"horse");
    let anything = args[1];
    horse.send(anything);
  }});

client.login(process.env.BOT_TOKEN);
