/*CMD
  command: /adminunbanusersit01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let id=User.getProperty("adminmsgid")
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
Bot.editMessage("*Now send me user telegram id that you want to Unban from blacklist*",id)
Bot.runCommand("/shta02")
}else{
Bot.runCommand("/start")}
