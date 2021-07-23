const Discord = require("discord.js");
const fetch = require('node-fetch')

require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX

client.on("ready", () => {
    console.log("Estou pronto para ser usado");
})

client.on("message", async message => {
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
            var embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('clique aqui para convidar esse bot')
                .setURL('https://discord.com/oauth2/authorize?client_id=867903185988485141&scope=client&permissions=2048')

            message.reply(embed)
            break;
        case "clima":
            const url = "http://api.openweathermap.org/data/2.5/weather?"

            const apiKey = "&appid=" + process.env.API
            const lang = "&lang=pt_br"
            const unit = "&units=metric"

            let argsJunto = ""

            args.forEach(arg => argsJunto += encodeURI(arg.toLowerCase()) + "+")

            argsJunto = argsJunto.slice(0, argsJunto.length - 1)

            const city = "&q=" + argsJunto
            console.log(city)

            const request = await fetch(url + city + apiKey + lang + unit)
            const json = await request.json()

            console.log(json)

            if (json.cod == 404) {
                message.channel.send("cidade não encontrada")
                return
            }

            var embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Previsão do tempo para ${json.name} = ${json.sys.country}`)
                .setDescription(`${json.weather[0].description}`)
                .addFields(
                    {
                        name: "**Temperatura**", value: `Atual: ${json.main.temp} ºC \n
                        Máxima: ${json.main.temp_max} ºC \n 
                        Mínima: ${json.main.temp_min} ºC \n 
                        Sensação térmica: ${json.main.feels_like} ºC`, inline: true
                    },
                    { name: "**Umidade**", value: `${json.main.humidity}%`, inline: true },
                    { name: "**Velocidade do vento**", value: `${json.wind.speed} km/h`, inline: true },
                    { name: "**Pressão do ar**", value: `${json.main.pressure} kPA`, inline: true }
                )

            message.channel.send(embed)
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