
  const { MessageEmbed } = require("discord.js");
  module.exports = async client => {

    //PRESENCE
  const status = [
    `The Clubhouse`
  ];
  
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {
      type: "COMPETING"
    });
  }, 5000);
  

  //BOT LOG DISCORD
  const Channel = client.channels.cache.get("730288004463067267");
  if (!Channel) return console.error("Couldn't find the channel for ready log");
  const online = new MessageEmbed()
    .setColor("GREEN")
    .setAuthor(
      `${client.user.username} is now online`,
      client.user.displayAvatarURL()
    );
  Channel.send(online).catch(e => console.log(e));

    //JOIN VOICECHANNEL
    const channel = client.channels.cache.get("836508545364525066");
    if (!channel) return console.error("The voice channel does not exist!");
    channel
      .join()
      .then(connection => {
        console.log("Successfully connected to Idle channel");
        connection.voice.setSelfDeaf("true");
      })
      .catch(e => {
        console.error(e);
      });

  console.info(`Logged in as ${client.user.username}`);

}