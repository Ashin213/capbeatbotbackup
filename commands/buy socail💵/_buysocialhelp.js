/*CMD
  command: /buysocialhelp
  help: 
  need_reply: false
  auto_retry_time: 
  folder: buy socail💵

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({
    text: "social plans",
    reply_markup: {
      inline_keyboard: [
        [{ text: "Telegram plans⚡️", callback_data: "/Telegramplan" }], [{ text: "YOUTUBE PLAN⚡️", callback_data: "/youtubeplan" }], [{ text: "IG FOLLOWERS⚡️", callback_data: "/IGplan" }]
       

      ]
    }
});
