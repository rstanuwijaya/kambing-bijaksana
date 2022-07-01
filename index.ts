import { Client, Intents } from 'discord.js'
import 'dotenv/config'

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})
client.once('ready', () => {
    console.log('Ready!')
})

// Login to Discord with your client's token
client.on('message', async (msg) => {
    console.log(msg)
    if (msg.content === 'ping') {
        msg.reply('pong')
    }
})

client.login(process.env.BOT_TOKEN)
