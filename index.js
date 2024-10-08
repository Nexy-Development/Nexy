const { Client, Events, GatewayIntentBits  } = require('discord.js');
const { presenceName, presenceType, presenceStatus } = require('./config.json');

require('dotenv').config()
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
client.login(DISCORD_BOT_TOKEN);

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
