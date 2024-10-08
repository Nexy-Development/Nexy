const { Client, Intents } = require('discord.js');
const { presenceName, presenceType, presenceStatus } = require('./config.json');
require('dotenv').config()

Client.login(process.env.DISCORD_BOT_TOKEN);