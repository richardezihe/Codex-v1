const { Telegraf } = require("telegraf");
const config = require("./config.json");
const utils = require("./utils");
const helper = require("./helper");
const database = require("./database.json");
const fs = require("fs");

const bot = new Telegraf(config.botToken);

// Load Commands
bot.start((ctx) => {
  ctx.reply(`Welcome to 𓂀 ℂ𝕠𝕕𝕖𝕩 𝕧𝟙 𓂀, ${ctx.from.first_name}! Type /menu to see available commands.`);
});

// MENU COMMAND
bot.command("menu", (ctx) => {
  const menu = `
╭━━━[ 𓂀 ℂ𝕠𝕕𝕖𝕩 𝕧𝟙 𓂀 ]  
┃ Developer : Ezihe001  
┃ Version : v1  
┃ Library : Telegraf.js  
╰━━━━━━━━━━━━━━━━━━━❍  
╭━━━[ COMMANDS ]  
┃ /pairwa - Pair WhatsApp  
┃ /ping - Check bot status  
┃ /hijack - Group Hijack  
┃ /cash <number> - Crash WhatsApp  
┃ /tagall - Tag All Members  
┃ /viewones - View "View Once" Media  
┃ /wifi - WiFi Password Cracker  
┃ /ai - AI Chat Assistant  
┃ /ascii - Generate ASCII Text  
╰━━━━━━━━━━━━━━━━━━━❍  
`;
  ctx.reply(menu);
});

// WHATSAPP PAIRING FUNCTION
bot.command("pairwa", (ctx) => {
  const pairingCode = utils.generatePairingCode();
  ctx.reply(`🔗 Use this code to pair WhatsApp: *${pairingCode}*`);
});

// CRASH FUNCTION
bot.command("cash", (ctx) => {
  const target = ctx.message.text.split(" ")[1];
  if (!target) return ctx.reply("❌ Provide a target number!");
  ctx.reply(`💥 Crashing WhatsApp number: ${target}...`);
  utils.crashWhatsApp(target);
});

// GROUP HIJACK
bot.command("hijack", (ctx) => {
  if (!helper.isAdmin(ctx)) return ctx.reply("❌ You are not an admin!");
  helper.hijackGroup(ctx);
});

// WIFI HACK SIMULATOR
bot.command("wifi", (ctx) => {
  const wifiPass = utils.generateWiFiPassword();
  ctx.reply(`📡 WiFi Password Found: *${wifiPass}*`);
});

// AI CHATBOT
bot.command("ai", (ctx) => {
  const question = ctx.message.text.replace("/ai", "").trim();
  if (!question) return ctx.reply("❌ Ask me something!");
  ctx.reply(`🤖 AI: ${utils.generateAIResponse(question)}`);
});

// START BOT
bot.launch();
console.log("Codex v1 is running...");