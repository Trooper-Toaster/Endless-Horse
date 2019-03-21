const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  let args = messageArray.slice(1);
  if (msg.content === ';horse') {
    let horse = msg.guild.channels.find(`name`,"horse");
    let anything = msg.args[1];
    horse.send(anything);
  }});

client.login(process.env.BOT_TOKEN);
