const express = require("express");
const http = require("http");
function print(argument) {
  console.log(argument);
}

const app = express();
var server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Listening on port ${listener.address().port}.`);
});

const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});