const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

const bot = new Telegraf('8153251026:AAEkIYBt8wk4zGTVRekv7yhwoRCAufKiuVY');

// ✅ WhatsApp Pairing Function
bot.command('pairwa', (ctx) => {
    ctx.reply('🔗 Send your WhatsApp number to pair with Codex v1.\n\nExample: `/pairwa +1234567890`');
});

// ✅ Display Venom Image
bot.command('venom', (ctx) => {
    const imagePath = path.join(__dirname, 'venom.png');
    if (fs.existsSync(imagePath)) {
        ctx.replyWithPhoto({ source: imagePath });
    } else {
        ctx.reply('⚠️ Venom image not found. Please check if `venom.png` exists in your directory.');
    }
});

// ✅ Basic Menu
bot.command('menu', (ctx) => {
    ctx.reply('📜 *Codex v1 Commands:*\n\n' +
        '/pairwa - Pair WhatsApp\n' +
        '/venom - Show Venom Image\n' +
        '/help - Get Help\n');
});

// ✅ Bot Start
bot.start((ctx) => ctx.reply('👋 Welcome to Codex v1! Type /menu to see commands.'));

// ✅ Launch Bot
bot.launch()
    .then(() => console.log('✅ Codex v1 is now running!'))
    .catch((err) => console.error('❌ Error starting Codex v1:', err));

// ✅ Graceful Shutdown
process.on('SIGINT', () => bot.stop('SIGINT'));
process.on('SIGTERM', () => bot.stop('SIGTERM'));