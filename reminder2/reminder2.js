const Discord = require('discord.js');
const bot = new Discord.Client();

const token = `ENTER TOKEN HERE`;

bot.once('ready', () =>{
  console.log('Bot online');
});

let date = '';
let time = '';
let details = '';

bot.on('message', msg=>{
function checkTime(){
let d = new Date();
let lDate = d.toLocaleDateString();
let lTime = d.toLocaleTimeString();
if (lDate === date && lTime === time){
msg.channel.send(details); }
 }


if (msg.content === 'nm reminder'){
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

});


bot.login("Njk4MTI0NDEwOTUwOTA5OTgz.XrkAnQ.Gwn_4y1xVQKzjW_z2ap40UEHW0g");
