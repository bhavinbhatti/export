/*CMD
  command: /adminminwdsettup01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad=Bot.getProperty("admin01")
//let min=Bot.getProperty("adminminwd01")
if(chat.chatid==ad){
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.setProperty("adminminwd01",message,"string")
Bot.editMessage("✅ Minimum withdrawal successfully updated to "+message,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")}
