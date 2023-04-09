/*CMD
  command: /buyreplayforadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👥 Users

  <<ANSWER
*enter 12 digit transetion id ⚡️*

*URL OF YOUR SOCIAL*

eg -

`123456789012`
https://sociallink.in/@yourchannel
with plan code 089

like this
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have no admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("confirmation has been sended.. ⚡️");

