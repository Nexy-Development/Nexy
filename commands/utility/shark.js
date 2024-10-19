const {
  SlashCommandBuilder,
  MessageEmbed,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shark")
    .setDescription("Replies with a story about a shark"),
  async execute(interaction) {
    const select = new StringSelectMenuBuilder.setPlaceholder(
      "Select your shark story"
    ).addOption(
      new StringSelectMenuOptionBuilder()
        .setLabel("Shark Attack")
        .setValue("attack")
    );

    const row = new ActionRowBuilder().addComponents(select);

    await interaction.reply({
      content: "Choose a shark story:",
      components: [row],
    });
  },
};
