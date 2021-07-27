require('dotenv').config()
const discord = require("discord.js")
const fs = require("fs");
const { MessageEmbed } = require("discord.js");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendStatus(200);
  });
  
  app.listen(process.env.PORT || 5000);

  client.commands = new discord.Collection();
client.aliases = new discord.Collection();

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


  fs.readdir(__dirname + "/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
      const event = require(__dirname + `/events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      console.log("Loading Event: "+eventName)
    });
  });

  fs.readdir('./commands/', (err, files) => {
    const commandHandler = require('./handler/commandHandler.js');
    commandHandler(err, files, client);
  });

  console.log('p')

client.login(process.env.TOKEN).catch(console.error)