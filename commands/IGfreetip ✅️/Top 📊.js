/*CMD
  command: Top 📊
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

let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
// olso it is possible get newest members:
list.order_ascending = false;

var items = list.get();
//Bot.inspect(items);

var msg = '*Top users* ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + ". " + 
    Libs.commonLib.getLinkFor(prop.user) + ": 👨" +
    String(prop.value)
}

Bot.sendMessage(msg);
