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

//client.on('message', message => {
        //var input = message.content.toUpperCase();
        if (input === 'NM TIMER 20MINS')

    {
        message.reply("20 min timer set");
        setTimeout(function(){
            message.reply("15 mins remaining")}, 300000);

        setTimeout(function(){
            message.reply("10 mins remaining")}, 600000);

        setTimeout(function(){
            message.reply("5 mins remaining")}, 900000);

        setTimeout(function(){
            message.reply(" 20 mins is up. Timer ended ")}, 1200000);

    }




});



client.login(process.env.TOKEN);