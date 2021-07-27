require('dotenv').config()
const discord = require("discord.js")


const client = new discord.Client({
    ws: {
      intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_VOICE_STATES"
      ],
    },
  });

  console.log('p')

client.login(process.env.TOKEN).catch(console.error)