const musicData = require('./data.js');

module.exports = {
	name: 'skip',
	description: 'Skips actual music.',
  args: '0',
  usage: ' ',
  aliases: '',
  guildOnly: true,
	async execute(message, args) {
    return await musicData.skip(message) ? 0 : message.channel.send("**\:white_check_mark: Music skipped!**");
	}
};