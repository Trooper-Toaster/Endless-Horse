const Discord = require('discord.js');
const botconfig = require("./botconfig.json")
const client = new Discord.Client();
const fs = require('fs');

client.once('ready', () => {
	console.log(`Ready!`);
	client.user.setActivity('In Progress...');
});

client.on('message', message => {
if (message.guild.id === "556479462045122590"){
	console.log("Cheese kingdom")
	if (message.content === '(help') {
		message.channel.send({embed: {
  	color: 3447003,
		title: "(hello",
		description: "Says hi to you, because you deserve to be noticed.",
	}})};
  console.log(`Name: ${message.author.username}`)
	console.log(`Tag: ${message.author.discriminator}`)
	console.log(`Channel: ${message.channel.name}`);
	console.log(`Message: ${message.content}`);
	console.log(`Time: ${message.createdAt}`)
	console.log(`Server: ${message.guild}`)
	console.log(`Image: ${message.attachments.url}`)
	console.log(message.guild.id)
	console.log("---------------------------------")
	fs.appendFile('tck.txt', `Name: ${message.author.username}#${message.author.discriminator}\r\nChannel: ${message.channel.name}\r\nMessage: ${message.content}\r\nTime: ${message.createdAt}\r\nURL: ${message.url}\r\nServer: ${message.guild}\r\nImage: ${message.attachments.url}\r\n ------- \r\n`, function (err) {
  if (err) throw err;
  console.log('Worked for tck');
	});
} else {
	
	/*if (message.content === '(help') {
		message.channel.send({embed: {
  	color: 3447003,
  	description: "Commands coming soon..."
	}})};
  console.log(`Name: ${message.author.username}`)
	console.log(`Tag: ${message.author.discriminator}`)
	console.log(`Channel: ${message.channel.name}`);
	console.log(`Message: ${message.content}`);
	console.log(`Time: ${message.createdAt}`)
	console.log(`Server: ${message.guild}`)
	console.log(message.attachments.url);

	console.log(message.guild.id)
	console.log("---------------------------------")
	fs.appendFile('message.txt', `Name: ${message.author.username}#${message.author.discriminator}\r\nChannel: ${message.channel.name}\r\nMessage: ${message.content}\r\nTime: ${message.createdAt}\r\nURL: ${message.url}\r\nServer: ${message.guild}\r\nImage: ${message.attachments.url}\r\n ------- \r\n`, function (err) {
  if (err) throw err;
  console.log('Worked for other');*/
	});
}

});


client.login(process.env.BOT_TOKEN);
