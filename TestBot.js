const Discord = require("discord.js");
const client = new Discord.Client();

Client.on("ready", () => {
    console.log("I'm ready!");
});

client.on("message", message => {
    if (message.content === "hi") {
        message.reply("Hello!")
    }
});        

client.login(process.env.BOT_TOKEN);
