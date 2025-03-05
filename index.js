const { Telegraf } = require('telegraf');
const fs = require('fs');
const config = require('./config.json');

const bot = new Telegraf(config.token);

// Command: Start
bot.start((ctx) => {
    ctx.reply("Welcome to 𓂀 ℂ𝕠𝕕𝕖𝕩 𝕧𝟙 𓂀\nType /menu to see commands.");
});

// Command: Menu
bot.command('menu', (ctx) => {
    const menuText = `
╭━━━[ 𓂀 ℂ𝕠𝕕𝕖𝕩 𝕧𝟙 𓂀 ]  
┃ Developer : Ezihe001  
┃ Version : v1  
┃ Library : Node-Telegram-Api  
╰━━━━━━━━━━━━━━━━━━━❍  
╭━━━[ USER INFO ]  
┃ User : ${ctx.from.first_name}  
┃ Sender : ✅  
┃ Moderator : ✅  
┃ Premium : ✅  
╰━━━━━━━━━━━━━━━━━━━❍  
╭━━━[ ADMIN COMMANDS ]  
┃ /hijack - Take over group (Admin only)  
┃ /tagall - Tag all members  
┃ /viewones - View "View Once" messages  
┃ /spamcall - Send spam or bug messages  
╰━━━━━━━━━━━━━━━━━━━❍  
╭━━━[ CRASH COMMANDS ]  
┃ /crashsock - Crash No Tag  
┃ /crashui - Crash system UI  
┃ /crashvoid - Crash Floods UI  
┃ /carouselx - Carousel X  
┃ /crldocu - Document Floods  
┃ /sockmention - Bug MentionZap  
┃ /cash [number] - Crash target WhatsApp  
╰━━━━━━━━━━━━━━━━━━━❍  
`;
    ctx.reply(menuText);
});

// Command: Crash
bot.command('crash', (ctx) => {
    ctx.reply("🔥 *Crash Activated!* 🔥\nSending overload spam...");
});

// Command: Pair WhatsApp
bot.command('pairwa', (ctx) => {
    ctx.reply("📲 Send your WhatsApp number to pair.");
});

// Start the bot
bot.launch().then(() => {
    console.log("Bot is running...");
});