const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const options = ["I'll walk up your lides sideways", "Margherita of Italy. Is that why cheese is pizza?"];

const bot = new Discord.Client({disableEveryone: true});

// Constants set up at start

function response() {
	return options[Math.floor(Math.random() * options.length)];
};
// Function for random response

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
//Says online when turned on

  bot.user.setActivity("22 Jump Street", {type: "Watching"});
  //sets to watching 22 Jump Street
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
//does nothing if a bot sends a message or gets dm
  let prefix = botconfig.prefix;
//sets prefix to ? from botconfig.json
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
//dont know what this does

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello");
  }

  if(cmd === `${prefix}name`){
    return message.channel.send("My nam jef");
  }

  if(cmd === `${prefix}matthew-steel`){
    return message.channel.send("is gay");
  }

  if(cmd === `${prefix}?`){

    return message.channel.send(response());
  }

  if(cmd === `${prefix}help`){
    return message.channel.send("Commands:\n?hello - says hello\n?name - says My nam Jef\n?? - pulls random response\n?code - sends link to code for main file\n");

  }

  if(cmd === `${prefix}code`){
    return message.channel.send("https://pastebin.com/TQLkQsiv");


  }
//All messages and responses
});

bot.login(botconfig.token);
//verifies bot token (I think)
