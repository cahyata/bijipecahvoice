const { MessageEmbed } = require('discord.js')
const ms = require("pretty-ms")
const { platform, arch, cpus, os } = require("os")

module.exports = {
	name: 'ping',
	description: 'Show Bot Latency',
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
        
        let embed = new MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setDescription(`**⏱ Bot Latency**\n\`\`\`
        Latency: ${Date.now() - message.createdTimestamp}ms
        API Latency: ${Math.round(client.ws.ping)}ms\`\`\`
        `)
        message.channel.send(embed)   
    },
};