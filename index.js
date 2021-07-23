const Discord = require("discord.js");
require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX

client.on("ready", () => {
    console.log("Estou pronto para ser usado");
})

client.on("message", message => {
    const content = message.content

    if (content == `<@${client.user.id}>` && !message.author.bot) {
        message.channel.send(`Meu prefixo é **${prefix}**`)
        return
    }
    // checa se contém o prefix e se é um usuário
    if (!content.startsWith(prefix) || message.author.bot) return;

    // pega os argumentos
    const args = content.slice(prefix.length).trim().split(' ');
    // pega o comando em si, já em minúsculo
    const command = args.shift().toLowerCase();

    switch (command) {
        case "davi":
            message.reply("O Davi nao esta no momento !")
            break;
        case "help":
            message.reply("Estamos em desenvolvimento!")
            break;
        case "convite":
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('clique aqui para convidar esse bot')
                .setURL('https://discord.com/oauth2/authorize?client_id=867903185988485141&scope=client&permissions=2048')

            message.reply(embed)
            break;

    }

    /*
    
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
        message.reply("")
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
    }*/
})

client.login(process.env.TOKEN)