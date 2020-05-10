const Discord = require('discord.js'); // creates an instance of discord.js
//require('dotenv-flow').config(); // creates an instance of dotenv-flow for token use
const client = new Discord.Client();
const { prefix } = require("./config.json");

const token = "Njk4MTI0NDEwOTUwOTA5OTgz.XpBXnA.qJJTXMXhdyofyeMK45MU_8XKW5U";

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', (receivedMessage)=>{
  if (msg.content === `nm reminder`) {
      msg.channel.send('Please enter reminder details in the following\n'
      + 'format:\n'
      + 'set reminder,dd/mm/yyyy,hh:mm:ss,details')

    }
});

//Splits all information for retrieval later
let date = ''
let time = ''
let details = ''
client.on('message', (receivedMessage)=>{

if (msg.content.startsWith('set reminder')) {
    let reminderParts = msg.content.split(',', 4)
    date = reminderParts[1]
    time = reminderParts[2]
   details = reminderParts[3]
   msg.channel.send('reminder set');
 }
});
setInterval((time,date,details)=>{
    let d = new Date();
    if (d.toLocaleDateString() === date && d.toLocaleTimeString() === time) {
      msg.channel.send(details)
    }
  }, 1000);
//client.login("Njk4MTI0NDEwOTUwOTA5OTgz.XpBXnA.qJJTXMXhdyofyeMK45MU_8XKW5U");
