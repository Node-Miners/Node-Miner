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
//*LK* need to ender code here to convert input to uppercase or lowercase so
//input does not need to be case sensitive

  // The command 'nm status' causes the bot to say 'Online!'
  if (msg.content === `${prefix}status`) {
    msg.channel.send('Online! :robot:');
  }

// The command 'nm calc' followed by a calculation returns an answer
// to the user.
  if (msg.content.startsWith(`${prefix}calc`)) {
      let parts = msg.content.split(' ', 3)
      let problem = parts[2]
      let answer = eval(problem)
      msg.channel.send(answer);
    }
 
let date = '';
let time = '';
let details = '';

function checkTime(){
let d = new Date();
let lDate = d.toLocaleDateString();
let lTime = d.toLocaleTimeString();
if (lDate === date && lTime === time){
msg.channel.send(details); }
 }


if (msg.content === 'nm reminder'){
  msg.channel.send('Please enter reminder details in the following\n' + 'format:\n'
+ 'set reminder,dd/mm/yyyy,hh:mm:ss am/pm,details\n'
+ 'No 0 in time for single hour time')
}


if (msg.content.startsWith('set reminder')){
  let reminderParts = msg.content.split(',', 4);
  date = reminderParts[1];
  time = reminderParts[2];
  details = reminderParts[3];
  setInterval(checkTime, 1000);
  msg.channel.send('reminder set');
}

});



client.login(process.env.TOKEN);
