// const { Client, Intents } = require('discord.js');
import {Client, Intents} from "discord.js"
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import fetch from "node-fetch"
const token = process.env['token']


function getQuote(){
  return fetch("https://zenquotes.io/api/random")
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data[0]["q"] + " -" + data[0]["a"]
  })
}
function testq(){
  return "test quote"
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'github') {
    await interaction.reply('https://github.com/jrojas10');
  } 
  if (interaction.commandName === 'hello') {
    await interaction.reply('Hello, my name is Mecha Senku');
  }
  if (interaction.commandName === 'inspire') {
    await getQuote().then (quote => interaction.reply(quote));
  }
  if (interaction.commandName === 'commands') {
    await interaction.reply('https://github.com/jrojas10/MechaSenkuNodeJS/blob/main/README.md');
  }






});
client.on("message", msg =>{
  if (msg.content === "ping"){
    msg.reply("pong")
  }
})

client.login(token);