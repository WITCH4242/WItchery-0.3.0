const Discord = require('discord.js');

const manager = new Discord.ShardingManager('./main.js', {
  TOKEN: 'NzgwMzQxMzU0Mzc5MDgzNzk3.X7trhA.iVuTbhwlRt1jagKgb_d61NGnk5E',
  //autoSpawn: true,
  totalShards: '1',
});

manager.on('shardCreate', shard => console.log(`Launching Shard ${shard.id + 1}`));
manager.spawn();

