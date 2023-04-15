/*CMD
  command: /loginasadmincap
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: enter password
  keyboard: 
  aliases: 
CMD*/

var msg = "Access denied."

if (message == "admin203") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "You admin now. wait for users message🥰. from ashin"
}

Bot.sendMessage(msg)
