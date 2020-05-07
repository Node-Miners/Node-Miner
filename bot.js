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

    let minutesToTime = '';
        function delayText(milliseconds){
        }
            if (msg.content.startsWith('${prefix} TIMER')){
                // to split the input and get the varible to use in calculations
                let timerParts = message.content.split(' ',3)
                minutesToTime = timerParts[2]
                msg.reply(minutesToTime)
                msg.channel.send('mins timer set');//should be on line above??

                //This converts overall timer time to milliseconds
                msForTimer = 60000*minutesToTime;

                    //this is to make the timer countdown - not working yet
                    while (minutesToTime > 0) { //this does not yet countdown
                            minsRemaining = (minutesToTime - 1)*60000
                        //setTimeout(function(){
                         //msg.reply(minsRemaining)}, (minsRemaining));
                            minutesToTime = minutesToTime - 1;
                    }
                    //message displays after timer finished
                    if (minutesToTime === 0 )
                        setTimeout(function(){
                        msg.reply('**Timer ended**')}, (msForTimer));


                }

});



client.login(process.env.TOKEN);
