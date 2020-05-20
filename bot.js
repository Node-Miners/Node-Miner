// Run dotenv

const Discord = require('discord.js'); // creates an instance of discord.js
require('dotenv-flow').config(); // creates an instance of dotenv-flow for token use
const client = new Discord.Client();
const { prefix } = require("./config.json");

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let date = '';
let time = '';
let details = '';

// Event listener when a user sends a message in the chat
client.on('message', msg => {
    var input = msg.content.toLowerCase();

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

function checkTime(){
let d = new Date();
let lDate = d.toLocaleDateString();
let lTime = d.toLocaleTimeString();
if (lDate === date && lTime === time){
msg.channel.send(details); }
 }


if (msg.content === `${prefix}reminder`){
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

        function delayText(milliseconds){
        }
        if (msg.content.startsWith(`${prefix}timer`)){
            // to split the input and get the varible to use in calculations
            let minutesToTime = '';
            let timerParts = msg.content.split(' ',3)
            minutesToTime = timerParts[2]
            msg.reply('Timer set for ' + (minutesToTime) +' minutes' );

            msForTimer = 60000*minutesToTime;

        while (minutesToTime > 1 ) {
                  minutesToTime = minutesToTime - 1;
                  msRemaining = msForTimer -((minutesToTime)*60000)

           if ( minutesToTime === 5 ) {
                     setTimeout(function(){ msg.reply('5 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 10) {
                     setTimeout(function(){ msg.reply('10 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 15) {
                     setTimeout(function(){ msg.reply('1 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 20) {
                     setTimeout(function(){ msg.reply('20 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 30) {
                     setTimeout(function(){ msg.reply('30 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 45) {
                     setTimeout(function(){ msg.reply('45 minutes remaining on timer')}, (msRemaining));
                  }
                  if ( minutesToTime === 60) {
                     setTimeout(function(){ msg.reply('60 minutes remaining on timer')}, (msRemaining));
                  }
                   }

                    //message displays after timer finished
                    setTimeout(function(){
                    msg.reply('**Timer ended**')}, (msForTimer));

                    }

});



client.login(process.env.TOKEN);
