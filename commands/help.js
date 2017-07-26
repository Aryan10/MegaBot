const config = require('../config.json');
exports.run = (client, message, args) => {
const commandslist = "help\nsay\nping\n"
message.channel.send(`List Of Commands\n*(Prefix = ${config.prefix})*\n\n\`\`\`${commandslist}\`\`\``);
}
