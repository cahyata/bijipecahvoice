require('dotenv').config()
const discord = require("discord.js")
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendStatus(200);
  });
  
  app.listen(process.env.PORT || 5000);

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