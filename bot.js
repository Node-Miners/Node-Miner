// Run dotenv

const Discord = require('discord.js'); // creates an instance of discord.js
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener when a user sends a message in the chat
client.on('message', msg => {

  // The command 'nm status' causes the bot to say 'Online!'
  if (msg.content === `${prefix}status`) {
    msg.channel.send('Online! :robot:');
  }

  // The command 'nm calc' followed by calculation causes the bot
  // to return result of calculation.

});




client.login(token);
