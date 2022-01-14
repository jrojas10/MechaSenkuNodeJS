const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const token = process.env['token']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'github') {
    await interaction.reply('https://github.com/jrojas10');
  } else if (interacton.commandName === 'hello'){
    await interaction.reply('Hello my name is Mecha Senku');
  }
});
client.on("message", msg =>{
  if (msg.content === "ping"){
    msg.reply("pong")
  }
})

client.login(token);