const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env['token']
const CLIENT_ID = process.env['CLIENT_ID']
const GUILD_ID = process.env['GUILD_ID']
const commands = [
  {
    name: 'github',
    description: 'Replies with github link'
  },
  {
    name:'hello',
    description: 'Introduce myself'
  },
  {
    name:'inspire',
    description: 'Respond with inspirational quote'
  },
  {
    name:'commands',
    description: 'List all of my commands'
  }
  ]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

