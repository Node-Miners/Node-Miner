const Discord = require('discord.js'); // creates an instance of discord.js
//require('dotenv-flow').config(); // creates an instance of dotenv-flow for token use
const client = new Discord.Client();
const { prefix } = require("./config.json");

const token = 'EnterYourTokenHERE';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


client.on('message', (receivedMessage)=>{
  if (msg.content === `${prefix}reminder`) {
      msg.channel.send('Please enter reminder details in the following\n'
      + 'format:\n'
      + 'set reminder,dd/mm/yyyy,hh:mm:ss,details')

    }
//});

//Splits all information for retrieval later
let date = ''
let time = ''
let details = ''
if (msg.content.startsWith('set reminder')) {
    let reminderParts = msg.content.split(',', 4)
    date = reminderParts[1]
    time = reminderParts[2]
   details = reminderParts[3]
}

});





     //ignores message if from bot
  //  if (receivedMessage.author == client.user){
  //   return
//    receivedMessage.channel.send(""+receivedMessage.content);

//})





// The command 'nm reminder' promps the bot to ask for a reminder

//  if (msg.content === `${prefix}reminder`) {
  //    return
  //  }
  //    msg.channel.send('Please enter reminder details in the following\n'
  //    + 'format:\n'
  //    + 'set reminder,dd/mm/yyyy,hh:mm:ss,details')

  //Splits all information for retrieval later
//  let date = ''
//  let time = ''
//  let details = ''
//  if (msg.content.startsWith('set reminder')) {
//      let reminderParts = msg.content.split(',', 4)
//      date = reminderParts[1]
//      time = reminderParts[2]
//  }


client.login("Njk4MTI0NDEwOTUwOTA5OTgz.XpBXnA.qJJTXMXhdyofyeMK45MU_8XKW5U");
