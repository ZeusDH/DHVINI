const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "file:///storage/emulated/0/Download/20250827_124207.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DH-VINI Is Alive Now😍*",
BOT_OWNER: '94784657814',  // Replace with the owner's phone number



};
