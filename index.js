const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (msg.content === ':horse') {
    let horse = msg.guild.channels.find(`name`,"horse");
    horse.send('Test')
  }});

client.login(process.env.BOT_TOKEN);
