module.exports = {
	name: 'ping',
	description: 'Replies with Pong!',
	async execute(interaction) {
    var content = interaction.commandName;
		await interaction.reply('Pong!');
	},
};