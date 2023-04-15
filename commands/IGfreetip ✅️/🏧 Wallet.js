/*CMD
  command: 🏧 Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: IGfreetip ✅️
  answer: please set your wallet ig username✅️

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("Instagramwallet")
User.setProperty("Instagramwallet" , data.message ,"string")
var button = [{ title: "Set Or Change Wallet", command: "🏧 Wallet" }]
Bot.sendInlineKeyboard(
  button,
  "*🏧 Wallet : \n" +
    wallet +
    "\n\n💳 Click the Set Or Change Wallet Button Before Sending Your followers wallet*"
)
