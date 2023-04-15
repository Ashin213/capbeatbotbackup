/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: ok! you can send message now.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "" + "\n" + message;
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
