const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ')setup') {
    msg.reply('Is this the channel you want to set up Endless Horse in? (yes/no)');
      if (msg.content === 'yes') {
        msg.reply ('Setting up in ${msg.channel}');
      } else if (msg.content === 'no') {
        msg.reply ('Please say this command in the channel you want me to be set up in');
      } else {
        msg.reply ('Error');
  }
};

client.login(process.env.BOT_TOKEN);
