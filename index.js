const Discord = require("discord.js");
require('dotenv').config();

const client = new Discord.Client();

const prefix = "#"

client.on("ready", () => {
    console.log("Estou pronto para ser usado");
})

client.on("message", message => {
    const content = message.content

    // checa se contém o prefix e se é um usuário
    if (!content.startsWith(prefix) || message.author.bot) return;

    const args = content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (content == "<@" + client.user.id + ">") {
        message.channel.send(`Meu prefixo é **${prefix}**`)
    }

    if (message.content === "davi") {
        message.reply("O Davi nao esta no momento !")
    }

    if (message.content === "Davi") {
        message.reply("O Davi nao esta no momento !")
    }

    if (message.content === "-raspadinha") {
        message.reply("Selecione um numero, 1, 2, 3 ?")
    }

    if (message.content === "-1") {
        message.reply("Perdeu")
    }

    if (message.content === "-2") {
        message.reply("Perdeu")
    }

    if (message.content === "-3") {
        message.reply("Parabens voce ganhou 1000")
    }

    if (message.content === "-help") {
        message.reply("Estamos em desenvolvimento")
    }

    if (message.content === "client-Davi") {
        message.reply("Ola oque deseja ?")
    }

    if (message.content === "Sao Paulo") {
        message.reply("23 graus positivos")
    }

    if (message.content === "-temperatura") {
        message.reply("Qual o estado ?")
    }

    if (message.content === "-convite") {
        message.reply("https://discord.com/oauth2/authorize?client_id=867903185988485141&scope=client&permissions=2048")
    }

    if (message.content === "-comandos") {
        message.reply("davi ou Davi, -help, -raspadinha, client-Davi, client-Davi, -verificar, -comandos, -temperatura, davi-profile")
    }

    if (message.content === "-verificar") {
        message.reply("Estou pronto para ser usado")
    }

    if (message.content === "RJ") {
        message.reply("21 graus positivos")
    }

    if (message.content === "Minas") {
        message.reply("31 graus positivos")
    }



    let davi = {
        nome: "Davi Jose",
        idade: 13,
        status: "JOIA"
    };


    if (message.content === "davi-profile") {
        message.reply("nome: Davi José, idade: 13, status: JOIA")
    }
})

client.login(process.env.TOKEN)