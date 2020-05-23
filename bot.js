// Run dotenv

const Discord = require('discord.js'); // creates an instance of discord.js

// jQuery is used to handle the search data, and jsdom makes jQuery usable outside of a web browser.
const { JSDOM } = require('jsdom')
const { window } = new JSDOM("")
const $ = require('jquery')(window)

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

  if (msg.author.bot) return // ignores messages from other bots

  // The command 'nm status' causes the bot to say 'Online!'
  if (msg.content === `${prefix}status`) {
    msg.channel.send('Online! :robot:');
  }

  if (msg.content.startsWith(`${prefix}help`)) {
    let h = new Date();
    let helpDate = h.toLocaleDateString();
    let helpTime = h.toLocaleTimeString();
    // inside a command, event listener, etc.
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('NodeMiner Help Screen')
    .setURL('')
    .setAuthor('NodeMiner', 'https://i.ibb.co/CbNQyHv/NM-logo-3.jpg', '')
    .setDescription('**NodeMiner** is a newly created up and coming Productivity Discord Bot')
    .setThumbnail('https://i.ibb.co/CbNQyHv/NM-logo-3.jpg')
    .addFields(
      { name: '`nm calc`', value: 'followed by a calculation returns an answer to the user \n e.g. `nm calc 5+5`' },
    )
    .addFields(
      { name: '`nm timer`', value: 'followed by a number of minutes you wish to set the timer \n e.g. `nm timer 5` will set the timer for 5 minutes' },
    )
    .addFields(
      { name: '`nm poma`', value: 'followed by the study time and break time \n e.g. `nm poma 25 5` this will set a 25 minute study time and 5 minutes break time' },
    )
    .addFields(
      { name: '`nm search` **Or** `nm wiki`', value: 'followed by your search will return answers back to the user \n e.g. `nm search sport` **or** ` nm wiki nodejs`' },
    )
    .addFields(
      { name: '`nm reminder`', value: 'followed by your reminder  will return answers back to the user e.g. `nm reminder,dd/mm/yyyy,hh:mm:ss am/pm,details` \n **Note:** Date format is specific to where Bot is run from \n `Your local format is Date: ${helpDate}`, `Time: ${helpTime}`'},
    )
    .addFields(
      {name: '`nm reminder`', value: `followed by your reminder will return answers back to the user e.g.nm reminder,${helpDate},${helpTime},Time for shool`},
    )
  
    .setTimestamp()
    .setFooter('NodeMiner the Productivity Discord Bot for you', 'https://i.ibb.co/CbNQyHv/NM-logo-3.jpg');

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

  function checkTime() {
    let d = new Date();
    let lDate = d.toLocaleDateString();
    let lTime = d.toLocaleTimeString();
    if (lDate === date && lTime === time) {
      msg.reply(details);
    }
  }

  if (msg.content.startsWith(`${prefix}reminder`)) {
    let reminderParts = msg.content.split(',', 4);
    date = reminderParts[1];
    time = reminderParts[2];
    details = reminderParts[3];
    setInterval(checkTime, 1000);
    msg.reply('Reminder has been set');
  }

  function delayText(milliseconds) {
  }
  if (msg.content.startsWith(`${prefix}timer`)) {
    // to split the input and get the varible to use in calculations
    let minutesToTime = '';
    let timerParts = msg.content.split(' ', 3)
    minutesToTime = timerParts[2]
    msg.reply('Timer set for ' + (minutesToTime) + ' minutes');

    msForTimer = 60000 * minutesToTime;

    while (minutesToTime > 1) {
      minutesToTime = minutesToTime - 1;
      msRemaining = msForTimer - ((minutesToTime) * 60000)

      if (minutesToTime === 5) {
        setTimeout(function () { msg.reply('5 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 10) {
        setTimeout(function () { msg.reply('10 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 15) {
        setTimeout(function () { msg.reply('1 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 20) {
        setTimeout(function () { msg.reply('20 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 30) {
        setTimeout(function () { msg.reply('30 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 45) {
        setTimeout(function () { msg.reply('45 minutes remaining on timer') }, (msRemaining));
      }
      if (minutesToTime === 60) {
        setTimeout(function () { msg.reply('60 minutes remaining on timer') }, (msRemaining));
      }
    }

    //message displays after timer finished
    setTimeout(function () {
      msg.reply('**Timer ended**')
    }, (msForTimer));

  }


  if (msg.content.startsWith(`${prefix}poma`)) {
    // to split the input and get the varible to use in calculations
    let pomMinutes = '';
    let pomParts = msg.content.split(' ', 4)
    pomMinutesStudy = pomParts[2]
    pomMinutesBreak = pomParts[3]
    msg.reply('Pomodoro set for  ' + (pomMinutesStudy) + ' minutes of study and ' + (pomMinutesBreak) + ' minutes break');

    msForPomStudy = 60000 * pomMinutesStudy;
    msForPomBreak = 60000 * pomMinutesBreak;


    while (pomMinutesStudy > 1) {
      pomMinutesStudy = (pomMinutesStudy - 1);
      msPomRemaining = msForPomStudy - ((pomMinutesStudy) * 60000)

      if (pomMinutesStudy === 5) {
        setTimeout(function () { msg.reply('5 minutes remaining till break') }, (msPomRemaining));
      }
      if (pomMinutesStudy === 10) {
        setTimeout(function () { msg.reply('10 minutes remaining till break') }, (msPomRemaining));
      }
      if (pomMinutesStudy === 15) {
        setTimeout(function () { msg.reply('15 minutes remaining till break') }, (msPomRemaining));
      }
      if (pomMinutesStudy === 30) {
        setTimeout(function () { msg.reply('30 minutes remaining till break') }, (msPomRemaining));
      }
      if (pomMinutesStudy === 45) {
        setTimeout(function () { msg.reply('45 minutes remaining till break') }, (msPomRemaining));
      }
      let parts = msg.content.split('c', 3)
      let problem = parts[2]
      let answer = eval(problem)
      msg.channel.send(answer);
    }

    setTimeout(function () {
      msg.reply('**Time for a break**')
    }, (msForPomStudy));
    setTimeout(function () { msg.reply("Break time over in 1 minute") }, (msForPomBreak + msForPomStudy - 60000));
    setTimeout(function () { msg.reply("Break time over") }, (msForPomBreak + msForPomStudy));

  }

  // Web Search MVF
  if (msg.content.startsWith(`${prefix}search`)) {

    // The query is defined as whatever comes after the string 'nm search ', which is 10 characters long
    let query = msg.content.slice(10, msg.content.length)
    console.log('Search query: ' + query) // The query is logged for troubleshooting purposes

    // This url fetches search data in JSON format.
    let url = `http://api.serpstack.com/search?access_key=${process.env.SERP_API_KEY}&type=web&query=${query}`
    console.log(url)

    let output = ">>> Here are your results:\n\n"

    // This jQuery method gets the json data from the URL
    $.get(url, function (data) {

      // prints some info about the request to the API
      console.log(data.request)

      // This if/else statement adds search results to the string if the API request is successful, 
      // or modifies the string to an error message if unsuccessful.
      if (data.request.success) {
        for (i = 0; i < 5; i++) {
          output += (i + 1) + ". " + data.organic_results[i].title + "\n<" + data.organic_results[i].url + ">\n\n"
        }
      } else {
        output = '>>> Search API error!'
      }

      // The output string is send to the discord channel
      msg.channel.send(output)

    })
  }

  // Wiki search MVF
  if (msg.content.startsWith(`${prefix}wiki`)) {
    let query = msg.content.slice(8, msg.content.length)
    console.log(query)
    query += ' wikipedia'

    let url = `http://api.serpstack.com/search?access_key=${process.env.SERP_API_KEY}&type=web&query=${query}`
    console.log(url)

    let output = ''

    $.get(url, function (data) {

      // prints some info about the request to the API
      console.log(data.request)

      if (data.request.success) {
        for (i = 0; i < 5; i++) {
          if (data.organic_results[i].url.includes('wikipedia.org')) {
            output = '>>> ' + data.organic_results[i].title + '\n' + data.organic_results[i].url
            break
          } else {
            output = 'Could not find relevant article'
          }
        }
      } else {
        console.log("Api Error!")
        output = '>>> Search API error!'
      }

      msg.channel.send(output)

    })
  }
});



client.login(process.env.TOKEN);
