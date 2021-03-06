export default {
  name: "vfix",
  description: "Перезапускает бота если что-то не так.",
  cooldown: 20,
  execute: async function(message, _args, options) {
    const queue = options.queue.get(message.guild.id)

    if (queue)
      if (queue.pauseTimer)
        clearTimeout(queue.pauseTimer)

    options.queue.delete(message.guild.id)
    const player = options.shoukaku.getPlayer(message.guild.id)
    if (player) {
      player.disconnect()
    }

    message.reply("мы сделали, что могли.")
  }
}