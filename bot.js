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

  if (msg.content.startsWith(`${prefix}help`)) {

  // inside a command, event listener, etc.
  const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('NodeMiner Help Screen')
    .setURL('')
    .setAuthor('NodeMiner', 'https://i.ibb.co/CbNQyHv/NM-logo-3.jpg', '')
    .setDescription('**NodeMiner** is a Newly created and up and comming Productivity Discord Bot')
    .setThumbnail('https://i.ibb.co/CbNQyHv/NM-logo-3.jpg')
    .addFields(
      { name: '`nm calc`', value: 'followed by a calculation returns an answer to the user \n e.g. `nm calc 5+5`' },
    )
    .addFields(
      { name: '`nm timer`', value: 'followed by a number of minutes you wish to set the timer \n e.g. `nm timer 5` will set the timer for 5 minutes' },
    )
    .addFields(
      { name: '`nm poma`', value: 'followed by the study time and brake time \n e.g. `nm poma 25 5` this will set a 25 minute study time and 5 minutes break time' },
    )
     .addFields(
       { name: '`nm search` **Or** `nm wiki`', value: 'followed by your search will return answers back to the user \n e.g. `nm search sport` or ` nm wiki nodejs`' },
     )
     .addFields(
      { name: '`nm reminder`', value: 'followed by your reminder  will return answers back to the user e.g. `nm reminder,dd/mm/yyyy,hh:mm:ss AM/PM,details` \n **Note:** Date format is specific where Bot is run from' },
    )
    .setTimestamp()
    .setFooter('NodeMiner the productivity Discord Bot for you', 'https://i.ibb.co/CbNQyHv/NM-logo-3.jpg');

    msg.reply(helpEmbed);

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
msg.reply(details); }
 }


// if (msg.content === `${prefix}reminder`){
//   msg.reply('Please enter reminder details in the following\n' + 'format:\n'
// + 'set reminder,dd/mm/yyyy,hh:mm:ss am/pm,details\n'
// + 'No 0 in time for single hour time')
// }


if (msg.content.startsWith(`${prefix}reminder`)){
  let reminderParts = msg.content.split(',', 4);
  date = reminderParts[1];
  time = reminderParts[2];
  details = reminderParts[3];
  setInterval(checkTime, 1000);
  msg.reply('Reminder has been set');
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