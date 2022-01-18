// const { Client, Intents } = require('discord.js');
import {Client, Intents} from "discord.js"
import keepAlive from "./server.js"
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import fetch from "node-fetch"
const token = process.env['token']

import API from "anime-images-api"
const images_api = new API() ;


function getQuote(){
  return fetch("https://zenquotes.io/api/random")
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data[0]["q"] + " -" + data[0]["a"]
  })
}


function getPunch(){
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
  if (interaction.commandName === 'punch') {
    await images_api.sfw.punch().then (response => interaction.reply(response.image));
  }
  if (interaction.commandName === 'kill') {
    await images_api.sfw.kill().then (response => interaction.reply(response.image));
  }






});
keepAlive()
client.login(token);