require('dotenv').config()
const discord = require("discord.js")
const Discord = require("discord.js")
const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const express = require("express");
const app = express();

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

  app.get("/", (req, res) => {
    res.sendStatus(200);
  });
  
  app.listen(process.env.PORT || 5000);

  client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

  fs.readdir('./events/', (err, files) => {
    const eventHandler = require('./handler/eventHandler.js');
    eventHandler(err, files, client);
  });

  fs.readdir('./commands/', (err, files) => {
    const commandHandler = require('./handler/commandHandler.js');
    commandHandler(err, files, client);
  });

  console.log('p')

client.login(process.env.TOKEN).catch(console.error)