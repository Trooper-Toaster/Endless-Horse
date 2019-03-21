const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on("message", async message=> {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.content === ';horse') {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
if(wUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Cant warn other Mods")
  let reason = args.join(" ").slice(22);
    
    let channelf = message.guild.channels.find(`name`, "horse");
    channelf(reason);
  }});

client.login(process.env.BOT_TOKEN);
