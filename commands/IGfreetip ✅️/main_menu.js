/*CMD
  command: main_menu
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

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard(" Top 📊, 💰 Balance\n👫 Referral,🎁 Bonus,💲Withdraw,\n🏧 Wallet,📞Support", "*▶️ Refer and Earn Cash*")
}
if (user=="left"){
Bot.runCommand("/igfreetip");
}
