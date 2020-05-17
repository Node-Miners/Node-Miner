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

  
// need to make repeat 4 times
                if (msg.content.startsWith(`${prefix}poma`)){
                    // to split the input and get the varible to use in calculations
                    let pomMinutes = '';
                    let pomParts = msg.content.split(' ',4)
                    pomMinutesStudy = pomParts[2]
                    pomMinutesBreak = pomParts [3]
                    msg.reply('Pomodoro set for  ' + (pomMinutesStudy) +' minutes of study and ' +(pomMinutesBreak) +' minutes break' );

                    msForPomStudy = 60000*pomMinutesStudy;
                    msForPomBreak = 60000*pomMinutesBreak;
                       while (pomMinutesStudy > 1 ) {
                         pomMinutesStudy = (pomMinutesStudy - 1);
                         msPomRemaining = msForPomStudy -((pomMinutesStudy)*60000)

                      if ( pomMinutesStudy === 5 ) {
                        setTimeout(function(){ msg.reply('5 minutes remaining till break')}, (msPomRemaining));      
                       } 
                      if ( pomMinutesStudy === 10) {
                        setTimeout(function(){ msg.reply('10 minutes remaining till break')}, (msPomRemaining));      
                      } 
                      if ( pomMinutesStudy === 15) {
                        setTimeout(function(){ msg.reply('15 minutes remaining till break')}, (msPomRemaining));      
                      } 
                      if ( pomMinutesStudy === 30) {
                        setTimeout(function(){ msg.reply('30 minutes remaining till break')}, (msPomRemaining));      
                      } 
                      if ( pomMinutesStudy === 45) {
                        setTimeout(function(){ msg.reply('45 minutes remaining till break')}, (msPomRemaining));      
                      } 
                    }

                      
                            setTimeout(function(){
                            msg.reply('**Time for a break**')}, (msForPomStudy));
                            setTimeout(function(){ msg.reply("Break time over in 1 minute")}, (msForPomBreak+msForPomStudy - 60000));
                            setTimeout(function(){ msg.reply("Break time over")}, (msForPomBreak+msForPomStudy));

              }
                            
});



client.login(process.env.TOKEN);
