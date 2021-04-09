const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {

    name: 'scorpio',
    description: "Daily horoscope embed",
    execute: async (message, args) => {        
        const { horoscope } = await fetch('https://ohmanda.com/api/horoscope/scorpio/').then(response => response.json());
        const { sign } = await fetch('https://ohmanda.com/api/horoscope/scorpio/').then(response => response.json());
        const { date } = await fetch('https://ohmanda.com/api/horoscope/scorpio/').then(response => response.json());


        let scorpio = new Discord.MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setThumbnail('http://www.astrology.com/images-US/signs/sign-scorpio.png')
        .setFooter(date)
        message.channel.send(scorpio);
    }
}