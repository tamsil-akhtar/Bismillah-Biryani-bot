require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const messageHandler = require("./handlers/messageHandler");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

messageHandler(bot);

console.log("🤖 Albela Biryani Bot is running...");
