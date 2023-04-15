/*CMD
  command: /IGplan
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
    text: "choose a plan",
    reply_markup: {
      inline_keyboard: [
        [{ text: "Rs. 2 = 50 followers ⚡️", callback_data: "/rs250followersig" }]
       

      ]
    }
});
