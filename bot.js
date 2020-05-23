// Run dotenv

const Discord = require('discord.js'); // creates an instance of discord.js

// jQuery is used to handle the search data, and jsdom makes jquery usable outside of a web browser.
const { JSDOM } = require('jsdom')
const { window } = new JSDOM("")
const $ = require('jquery')(window)
//const SEARCH_KEY = process.env.SERP_API_KEY

require('dotenv-flow').config(); // creates an instance of dotenv-flow for token use
const client = new Discord.Client();
const { prefix } = require("./config.json");

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener when a user sends a message in the chat
client.on('message', msg => {

  if (msg.author.bot) return // ignores messages from other bots

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

  // Web Search
  if (msg.content.startsWith(`${prefix}search`)) {
    let query = msg.content.slice(10, msg.content.length)
    console.log(query)

    let url = `http://api.serpstack.com/search?access_key=${process.env.SERP_API_KEY}&type=web&query=${query}`
    console.log(url)

    let output = ">>> Here are your results:\n\n"

    $.get(url, function (data) {

      // prints some info about the request to the API
      console.log(data.request)

      if (data.request.success) {
        for (i = 0; i < 5; i++) {
          output += (i + 1) + ". " + data.organic_results[i].title + "\n" + data.organic_results[i].url + "\n\n"
        }
      } else {
        output = '>>> Search API error!'
      }

      msg.channel.send(output)

    })
  }

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
