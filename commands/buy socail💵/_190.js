/*CMD
  command: /190
  help: 
  need_reply: false
  auto_retry_time: 
  folder: buy socail💵
  answer: 
  keyboard: 
  aliases: 190
CMD*/

var button = [[{ text: "send transetion id and confirm payment✅️", callback_data: "/buyreplayforadmin" }]]

Api.sendPhoto({ photo: "https://i.top4top.io/p_2645drgg40.png", caption: "scan qr code and pay 150₹⚡️ or you can use showing payment id", reply_markup: { inline_keyboard : button }, parse_mode: "Markdown" })
