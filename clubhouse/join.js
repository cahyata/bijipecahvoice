const discord = require("discord.js");

module.exports = client => {
    const masterch = client.channels.cache.get('869162393756921876')

    client.on('voiceStateUpdate', (oldState, newState) => {
        if(oldState.channelID === null && newState.channelID !== null && newState.channelID !== "869162393756921876"){
            console.log('OKe')
            guild.channels.create('tes', {
                type: 'voice'
            })
        }
    })
}