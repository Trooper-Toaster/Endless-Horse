const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on("message", async message=> {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (msg.content === ';horse') {
  
    let horse = message.guild.channels.find(`name`,"horse");
    let anything = args.join(" ").slice(22);
    horse.send(anything);
  }});

client.login(process.env.BOT_TOKEN);
