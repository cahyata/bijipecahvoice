const discord = require("discord.js");

module.exports = client => {
    const masterch = client.channels.cache.get('869162393756921876')
    const serpe = client.guilds.cache.get('622684456733638666')

    client.on('voiceStateUpdate', (oldState, newState) => {
        
        if(oldState.channelID === null && newState.channelID !== null && newState.channelID === "869162393756921876"){
            const category = newState.channel.parentID

            console.log('User Joins Clubhouse')
            serpe.channels.create('Clubhouse', {
                type: 'voice',
                parent: `${category}`
            }).then(chan => {
                newState.setChannel(chan).then(() => {
                    setTimeout(function(){
                        setInterval(() => {
                            if(chan === null) return;
                            if(chan.members.size === 0){
                                chan.delete()
                            } 
                        }, 3000)
                    }, 5000)
                }) 
            }).catch()
            
        }
    })
}