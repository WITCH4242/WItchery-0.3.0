const Discord = require('discord.js');

module.exports = {

    name: 'fullmoon',
    description: "this is a full moons or 2021 embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let fullmoon = new Discord.MessageEmbed()
      .setTitle(' 2021 Full moons ')
      .setColor("#D21F3C")
      .setTimestamp()
      .addField(` Names/dates/Horoscopes `, `January 28 (Wolf Moon in Leo)
      February 27 (Snow Moon in Virgo)
      March 28 (Worm Moon in Libra)
      April 27 (Pink Moon in Scorpio)
      May 26 (Flower Moon in Sagittarius) SUPERMOON LUNAR ECLIPSE!
      June 24 (Strawberry Moon in Capricorn)
      July 24 (Buck Moon in Aquarius)
      August 22 (Sturgeon Moon in Aquarius)
      September 20 (Corn Moon in Pisces)
      October 20 (Hunter's Moon in Aries)
      November 19 (Beaver Moon in Taurus)
      December 18 (Cold Moon in Gemini)`)
      .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
      message.channel.send(fullmoon);
    }
}