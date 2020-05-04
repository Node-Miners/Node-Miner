// Run dotenv

const Discord = require('discord.js'); // creates an instance of discord.js
require('dotenv-flow').config(); // creates an instance of dotenv-flow for token use
const client = new Discord.Client();
const { prefix } = require("./config.json");

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener when a user sends a message in the chat
client.on('message', msg => {

  // The command 'nm status' causes the bot to say 'Online!'
  if (msg.content === `${prefix}status`) {
    msg.channel.send('Online! :robot:');
  }
 
// The command 'nm' followed by a calculation returns an answer
// The command 'nm calc' followed by a calculation returns an answer
// to the user.
// Use of regex searches for individual symbols to determine whether it is
// a maths expresion.
let tempMsg = msg.content
let characters = /[\+\*-\/]/;
  if (tempMsg.startsWith('nm') && characters.exec(tempMsg) !== null) {
      let parts = tempMsg.split(' ', 2)
      let problem = parts[1]
  }
  
  if (msg.content.startsWith(`${prefix}calc`)) {
      let parts = msg.content.split(' ', 3)
      let problem = parts[2]
      let answer = eval(problem)
      msg.channel.send(answer);
    }
});



client.login(process.env.TOKEN);
