/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👥 Users

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("Hi @"+user.username+"🥰❤️ Thanks for joining")
Api.sendMessage({
    text: "Welcome",
    reply_markup: {
      inline_keyboard: [
        [{ text: "buy social 💵", callback_data: "/buysocialhelp" }], [{ text: "account recovery ⚡️", callback_data: "/command" }],[{ text: "Free demo social💥", callback_data: "/freedemo" }],[{ text: "Free ig followers 🎁", callback_data: "/igfreetip" }]
     

      ]
    }
});
