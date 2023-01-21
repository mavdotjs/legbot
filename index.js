const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
require("dotenv").config()
client.on('messageCreate', (message) => {
    message.react("🦵")
})

client.login(process.env.TOKEN)