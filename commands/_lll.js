/*CMD
  command: /lll
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    TRX},
    onSuccess: "/oninf"
  })
}else{
return
}
