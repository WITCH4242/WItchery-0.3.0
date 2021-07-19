const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
config: {
    name: 'aquarius',
    aliases: ["aqua", "aq"],
    description: "Daily aquarius horoscope embed",
    throttling: {
        usages: 2,
        duration: 10
      }
},
run: async (bot, message, args) => {
    message.channel.send('<a:loading:841122743050698762> Loading...')
        .then(msg => {
                      msg.delete({ timeout: 900});
                  })
        .catch(console.error);

        const { horoscope, sign, date } = await fetch('https://ohmanda.com/api/horoscope/aquarius/').then(response => response.json());

        let aquarius = new MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setFooter(date)
        
        message.channel.send(aquarius);
    }
}