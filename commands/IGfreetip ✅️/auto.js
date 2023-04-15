/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: IGfreetip ✅️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
withdraw.add(+message)
var wallet = User.getProperty("Instagramwallet")
var balance = Libs.ResourcesLib.userRes("balance")
if (data.message < 10) {
  Bot.sendMessage("*❌ Minimum withdraw is 10 followers*")
} else {
  if (data.message > balance.value()) {
    Bot.sendMessage("*Maximum withdraw " + balance.value().toFixed(30) + " Followers*")
  } else {
    let lib = Libs.ReferralLib
    var refList = lib.currentUser.refList.get()
    Bot.sendMessage(
      "*✅ Withdrawal Successfully Requested\n\n💳 Transaction details : Pending \n💰 Amount : " +
        data.message +
        " Followers\n💼 Wallet : \n" +
        wallet +
        "\n\n⏰ Withdrawal may process within 1min-24Hours" +
        "\n\n🌹 cap support group: \n@capbestdeals*"
    )
    balance.add(-data.message)
    Api.sendMessage({
      chat_id: "@luckynumberashincap",
      text:
        "*🔋New Withdrawal Requested 🏦\n\n◾Status : Pending\n◾User : @" +
        user.username +
        " \n◾User Id : " +
        user.telegramid +
        "\n◾Total Referral(s) : " +
        refList.length +
        "\n◾Amount : " +
        data.message +
        " Followers\n\n💳 Address : \n" +
        wallet +
        "\n\n⛓ TXID : Click Here" +
                  "\n\n🤖  Bot = @" +
          bot.name +
          "*",
      parse_mode: "Markdown"
    })
  }
}
