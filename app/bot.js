// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener when a user sends a message in the chat
client.on('message', msg => {
  // checks the message content and looks for the work "ping" so the
	// bot responds "pong"
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.DISCORD_TOKEN);
