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


        function delayText(milliseconds){
        }
            if (msg.content.startsWith('${prefix} timer')){
                let minutesToTime = '';
                // to split the input and get the varible to use in calculations
                let timerParts = message.content.split(' ',3)
                minutesToTime = timerParts[2]
                msg.reply(minutesToTime)
                msg.channel.send('mins timer set');//should be on line above??

                //This converts overall timer time to milliseconds
                msForTimer = 60000*minutesToTime;

                while (minutesToTime > 1 ) {
                          minutesToTime = minutesToTime - 1;
                          if ( minutesToTime % 5 === 0) {
                              msRemaining = msForTimer -((minutesToTime)*60000)
                              setTimeout(function(){
                          msg.reply((minutesToTime) +' minutes remaining on timer')}, (msRemaining));//number not working
                          }
                              }

              if  (minutesToTime === 1 )
                  minutesToTime = minutesToTime - 1;

                  //message displays after timer finished
              if (minutesToTime === 0 )
                  setTimeout(function(){
                  msg.reply('**Timer ended**')}, (msForTimer));

                }

                // need to make repeat 4 times
                if (msg.content.startsWith('${prefix} POM')){
                    // to split the input and get the varible to use in calculations
                    let pomMinutes = '';
                    let pomParts = msg.content.split(' ',4)
                    pomMinutesStudy = pomParts[2]
                    pomMinutesBreak = pomParts [3]
                    msg.reply('Pomodoro set for  ' + (pomMinutesStudy) +' minutes of study and ' +(pomMinutesBreak) +' minutes break' );

                    msForPomStudy = 60000*pomMinutesStudy;
                    msForPomBreak = 60000*pomMinutesBreak;
                      while (pomMinutesStudy > 1 ) {
                            pomMinutesStudy = pomMinutesStudy - 1;
                                if ( pomMinutesStudy % 5 === 0) {
                                    msPomRemaining = msForPomStudy -((pomMinutesStudy)*60000)
                                    setTimeout(function(){
                                msg.reply((pomMinutesStudy) +' minutes of study remaining')}, (msPomRemaining));//can not get minsRemaining to display anything but 1
                                }
                                    }

                        if  (pomMinutesStudy === 1 ) {
                            pomMinutesStudy = pomMinutesStudy - 1;
                        }

                        if (pomMinutesStudy === 0 )
                            setTimeout(function(){
                            msg.reply('**Time for a break**')}, (msForPomStudy));
                            setInterval(function(){ msg.reply("Break time over in 1 minute")}, (msForPomBreak+msForPomStudy - 60000));
                            setInterval(function(){ msg.reply("Break time over")}, (msForPomBreak+msForPomStudy));
                        }

});



client.login(process.env.TOKEN);
