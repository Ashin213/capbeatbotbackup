/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Please input reply for user

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "" + "\n" + message;
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
