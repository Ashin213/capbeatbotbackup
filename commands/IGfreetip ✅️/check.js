/*CMD
  command: check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IGfreetip ✅️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("main_menu")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join all channels*")
}
