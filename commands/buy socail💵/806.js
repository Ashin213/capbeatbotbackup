/*CMD
  command: 806
  help: 
  need_reply: false
  auto_retry_time: 
  folder: buy socail💵
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [[{ text: "send transetion id and confirm payment✅️", callback_data: "/buyreplayforadmin" }]]

Api.sendPhoto({ photo: "https://j.top4top.io/p_26443p76i0.png", caption: "scan qr code and pay 200₹⚡️ or you can use showing payment id", reply_markup: { inline_keyboard : button }, parse_mode: "Markdown" })
