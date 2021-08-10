module.exports = {
	name: 'command name',
	description: 'what the command does',
	async execute(interaction) {
		//interaction = message
    var content = interaction.commandName;
	},
};