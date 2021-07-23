const Discord = require("discord.js");

const bot = new Discord.Client();

const token = "******";

bot.login(token)
bot.on("ready", () => {
    console.log("Estou pronto para ser usado");
})

bot.on("message", msg => {
    if(msg.content === "davi"){
        msg.reply("O Davi nao esta no momento !")
    }
})


bot.on("message", msg => {
    if(msg.content === "Davi"){
        msg.reply("O Davi nao esta no momento !")
    }
})


bot.on("message", msg => {
    if(msg.content === "-raspadinha"){
        msg.reply("Selecione um numero, 1, 2, 3 ?")
    }
})
bot.on("message", msg => {
    if(msg.content === "-1"){
        msg.reply("Perdeu")
    }
})
bot.on("message", msg => {
    if(msg.content === "-2"){
        msg.reply("Perdeu")
    }
})
bot.on("message", msg => {
    if(msg.content === "-3"){
        msg.reply("Parabens voce ganhou 1000")
    }
})
bot.on("message", msg => {
    if(msg.content === "-help"){
        msg.reply("Estamos em desenvolvimento")
    }
})
bot.on("message", msg => {
    if(msg.content === "Bot-Davi"){
        msg.reply("Ola oque deseja ?")
    }
})

bot.on("message", msg => {
    if(msg.content === "Sao Paulo"){
        msg.reply("23 graus positivos")
    }
})
bot.on("message", msg => {
    if(msg.content === "-temperatura"){
        msg.reply("Qual o estado ?")
    }
})

bot.on("message", msg => {
    if(msg.content === "-convite"){
        msg.reply("https://discord.com/oauth2/authorize?client_id=867903185988485141&scope=bot&permissions=2048")
    }
})

bot.on("message", msg => {
    if(msg.content === "-comandos"){
        msg.reply("davi ou Davi, -help, -raspadinha, Bot-Davi, Bot-Davi, -verificar, -comandos, -temperatura, davi-profile")
    }
})

bot.on("message", msg => {
    if(msg.content === "-verificar"){
        msg.reply("Estou pronto para ser usado")
    }
})
bot.on("message", msg => {
    if(msg.content === "RJ"){
        msg.reply("21 graus positivos")
    }
})

bot.on("message", msg => {
    if(msg.content === "Minas"){
        msg.reply("31 graus positivos")
    }
})


let davi = {
    nome: "Davi Jose",
    idade: 13,
    status: "JOIA"
};

bot.on("message", msg => {
    if(msg.content === "davi-profile"){
        msg.reply("nome: Davi José, idade: 13, status: JOIA")
    }
})





