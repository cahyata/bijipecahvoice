const { MessageEmbed } = require("discord.js")
const { platform, arch, cpus, os } = require("os")
const ms = require("pretty-ms")

module.exports = {
	name: 'stats',
	description: 'Show Bot Information',
	aliases: [''],
	guildOnly: false, //true if only used in server
	args: false, //true if the command cant run without arguments
	usage: '[]',
    execute: async (message, args, client) => {
        const model = cpus()[0].model + " " + arch()
        const tanggalBuat = client.user.createdAt.toLocaleString()
        const uptime = ms(client.uptime, {verbose:true})
        let days = Math.floor(client.uptime / 86400000);
            let hours = Math.floor(client.uptime / 3600000) % 24;
            let minutes = Math.floor(client.uptime / 60000) % 60;
            let seconds = Math.floor(client.uptime / 1000) % 60;
        
        const embed = new MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle(`__${client.user.username}__ Statistics`)
        .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: 'true'})+"?size=4096")
        .addField("System", `
      Created on: ${tanggalBuat}
      CPU: ${model}
      Platform: ${platform}`)
        .addField("Latency", `
      Latency: ${Date.now() - message.createdTimestamp}ms
      API Latency: ${Math.round(client.ws.ping)}ms`)
        .addField('Uptime', `${uptime}`)
        .setFooter(`Bijibot by Gregorius Cahya#1251`, `${client.user.displayAvatarURL()}`)
        .setTimestamp()
        
        message.channel.send(embed)
        
    }
    
}