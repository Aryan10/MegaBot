exports.run = (client, message, args) => {
const config = require("../config.json");
const group = message.channel;
const Discord = require("discord.js");
const groupMember = message.author;

if (message.author === group.owner) {
const groupOwner = "true";
}else {
const groupOwner = "false";
}

const embed = new Discord.RichEmbed()
.setTitle(groupMember.name)
.setThumbnail(groupMember.avatarURL)
.setColor(3447003)
.addField(`User Name`, `${groupMember.username}_(${groupMember.tag})_`)
.addField("User ID", groupMember.id)
.addField("Joined Discord", groupMember.createdAt)
.addField(`Other Info`, `Status: ${groupMember.presence.status}\nDiscrim: ${groupMember.discriminator}\nGroup Owner: ${groupOwner}\nBot: ${groupMember.bot}`);
message.channel.send({embed});
}
