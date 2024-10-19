const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const Sharkstories = require("../../sharkstories.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shark")
    .setDescription("Replies with a story about a shark"),
  async execute(interaction) {
    const sharkEmbed = new EmbedBuilder()
      .setColor("RANDOM")
      .setTitle("Shark Story");
    const shark = Sharkstories[Math.floor(Math.random() * Sharkstories.length)]
      .setDescription(shark)
      .setTimestamp()
      .setFooter({ text: "https://github.com/Nexy-Development/Nexy" });
    await interaction.reply({ embeds: [sharkEmbed] });
  },
};
