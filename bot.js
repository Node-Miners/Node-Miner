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
// The command 'nm' followed by a calculation returns an answer
// to the user.
// calculation cannot have spaces. Only one space after 'nm'
// Example 'nm 2+2' will return '4'.  
  if (msg.content.includes(`${prefix}`) && msg.content.includes('+' || '-'
      || '*' || '^')) {
    let content = msg.content
    let parts = content.split(' ', 2)
    let problem = parts[1]
    let answer = eval(problem)
    msg.channel.send(answer);
    }
}

});




client.login(token);
