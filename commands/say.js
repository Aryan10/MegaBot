exports.run = (client, message, args) => {
    message.delete();
    message.channel.send(message.content.split(" ").slice(1).join(' '));
}
