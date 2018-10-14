const Discord       = require('discord.js');
const client        = new Discord.Client();
const webhook       = new Discord.WebhookClient("TOKEN", "TOKEN");
let fs              = require('fs');
const prefix        = "$";
const debug         = true;
const mods_roles    = ['Moderator'];
const admin_roles   = ['Admin']; //custom by you
const god_roles     = ['']; //custom by you

let general_channel = "";
let botlog_channel  = "";

let reactionChannelID = "498440633111937029";
let reactionChannel = ""
client.on('ready', () => {

       general_channel      = 'general';
       botlog_channel       = 'bot-log';
       reactionChannel = client.channels.find('id', reactionChannelID);
       // reactionChannel.fetchMessages().then(messages => console.log(messages)).catch(console.error);
       reactionChannel.fetchMessages();


       logger.client(client, botlog_channel);

      // Send message to channel
      if (!debug) {
        log("Bastion is online, beep boop");
      }



});

client.on('message', message => {

});





let customReactionMessageId = "";
let messagesToReact = [
  "498495693367803924", //select role
  "498493908125220884", //select platform
  "500915083195711490", //select you hero tank
  "500915667407470593", //select hero dps
  "500916492418940928", //select hero support

]

let iconMapping = [
  "🖥",
  "🇵",
  '🇽',
  "🇹",
  "🇩",
  "🇸",
  "🇫",
  'Reinhardt',
  'Zarya',
  'Winston',
  'Roadhog',
  'Orisa',
  'Dva',
  'Tracer',
  'Widowmaker',
  'Soldier76',
  'Reaper',
  'Pharah',
  'McCree',
  'Hanzo',
  'Genji',
  'Junkrat',
  'Mei',
  'Sombra',
  'Torbjorn',
  'Symmetra',
  'Doomfist',
  'Mercy',
  'Zenyatta',
  'Moira',
  'Ana',
  'Lucio',
];

let rolesMapping = [
  "PC",
  "PS4",
  "XBOX",
  "Tank",
  "DPS",
  "Support",
  "Flex",
  "Reinhardt",
  "Zarya",
  "Winston",
  "Roadhog",
  "Orisa",
  "D.Va",
  "Tracer",
  "Widowmaker",
  "Soldier: 76",
  "Reaper",
  "Pharah",
  "McCree",
  "Hanzo",
  "Genji",
  "Junkrat",
  "Mei",
  "Sombra",
  "Torbjörn",
  "Symmetra",
  "Doomfist",
  "Mercy",
  "Zenyatta",
  "Moira",
  "Ana",
  "Lúcio",
];

client.on('messageReactionAdd', (messageReaction, user) => {
  if (messagesToReact.indexOf(messageReaction.message.id) > -1) {
    console.log("Menssage reacted ID");
    console.log(messageReaction.message.id);
    console.log("First");

    var index = iconMapping.indexOf(messageReaction.emoji.name);
    console.log("Index value is --> "+ index);
    if (index > - 1) {
      console.log("Second");

      var member = messageReaction.message.guild.members.find('id', user.id);
      if (!member.roles.find('name', rolesMapping[index])) {
        var hero = messageReaction.message.guild.roles.find('name', rolesMapping[index]);
        console.log("Adding role: " + rolesMapping[index]);

        member.addRoles([hero]).then(console.log("Role "+rolesMapping[index]+" Added to user")).catch(console.error);
      } else {
        console.log("The user already have that role");
      }
    } else {
      console.log("Icon name is --> "+messageReaction.emoji.name);
    }
  }
});

client.on('messageReactionRemove', (messageReaction, user) => {
  if (messagesToReact.indexOf(messageReaction.message.id) > -1) {
    console.log("Menssage reacted ID");
    console.log(messageReaction.message.id);
    console.log("First");

    var index = iconMapping.indexOf(messageReaction.emoji.name);
    console.log("Index value is --> "+ index);
    if (index > - 1) {
      console.log("Second");

      var member = messageReaction.message.guild.members.find('id', user.id);

      if (member.roles.find('name', rolesMapping[index])) {
        var hero = messageReaction.message.guild.roles.find('name', rolesMapping[index]);
        console.log("Adding role: " + rolesMapping[index]);
        
        member.removeRoles([hero]).then(console.log("Role "+rolesMapping[index]+" removed from user")).catch(console.error);
      } else {
        console.log("The user dont have the role.");
      }
    } else {
      console.log("Icon name is --> "+messageReaction.emoji.name);
    }
  }
});



client.login('BOT TOKEN HERE');
