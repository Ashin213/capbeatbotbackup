/*CMD
  command: /freedemo
  help: 
  need_reply: false
  auto_retry_time: 2500
  folder: buy socail💵

  <<ANSWER
*you need to register on it and share*

https://www.fiewin.com/#/L?no=luckymG4j&ic=obSb

_after setting this you have able to do this confirmation with your registered screen record ❤️🥰_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({
    text: "your free plan activation task has been sended ✅️. wait a few minutes⚡️",
    reply_markup: {
      inline_keyboard: [
        [{ text: "activate this✅️", callback_data: "/freedemoreplay" }]
       

      ]
    }
});
