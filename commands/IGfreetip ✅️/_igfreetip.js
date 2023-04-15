/*CMD
  command: /igfreetip
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

var button = [{ title : "✅CHECK" , command : "✅CHECK" }]
Bot.sendInlineKeyboard(button , "*🛡 join our group If You Want To Start The Bot And Earn From It: \n\n➤ @capbestdeals\n\n☑️ Done joined! Click ✅CHECK*")
function hello(message) {
var greetings = ""

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(4)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +4 followers*");
}

function doAlreadyAttracted(){
Bot.sendMessage("*You Already Started this bot ❌*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
