const TelegramBot = requare('node-telegram-bot-api')

const TOKEN = '5067587687:AAEcajp02noUeTcdssWi7dLJvbIjSEuC_uk'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {

    bot.sendMessage(msg.chat.id, 'Hello from TE, bot sase "Hi, ${msg.from.first_name}"')
})