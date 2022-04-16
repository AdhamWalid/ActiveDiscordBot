require("events").EventEmitter.defaultMaxListeners = 200;
const {MessageActionRow} = require("discord.js"); 
const Discord = require('discord.js')
require('discord-reply');
const canvacord = require("canvacord");
const client = new Discord.Client({intents : 32767 , ws: { properties: 
  { $browser: "Discord iOS" }
  } }) 
  const moment = require('moment')
  const Levels = require("discord-xp");
  const { Player, QueryType, QueueRepeatMode } = require("discord-player");
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
  fetchGuilds: true,
  fetchVanity: true,
  fetchAuditLogs: true
});
  const discordTranscripts = require('discord-html-transcripts');
require('dotenv').config()
Levels.setURL(`${process.env.database}`)

const sourcebin = require('sourcebin');
const DiscordModal = require('discord-modal')
DiscordModal(client)
const prefix = "d!";
const {Database}  = require("quickmongo");
const db = new Database(process.env.database);
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { MessageButton } = require("discord.js");
const express = require('express')
const app = express()
const logs = require('discord-logs');
logs(client);
app.get('/' , (req,res) => {
  res.sendStatus(200)
})



 app.listen(3000)
const Canvas = require('canvas')
// app.listen(3000)

client.on("ready", async () => {
  await db.connect(); 
  console.table(await db.all())



    client.user.setActivity(`Ramadan Kareem`, {
        type: "WATCHING",
      })
      
      client.user.setPresence({
        status: "idle",
      })



console.log(`Logged in as ${client.user.tag}`)
//   if (!client.application?.owner) await client.application?.fetch();
const command = (await client.guilds.cache.get('804432734066835556')?.commands.fetch()).find((cmd) => cmd.id === '956648338768412765')

const aoi = (await client.guilds.cache.get('804432734066835556')?.commands.fetch()).find((cmd) => cmd.id === '956648338768412768')
const py = (await client.guilds.cache.get('804432734066835556')?.commands.fetch()).find((cmd) => cmd.id === '956648338768412770')
const bdfd = (await client.guilds.cache.get('804432734066835556')?.commands.fetch()).find((cmd) => cmd.id === '956648338843897886')
const npm = (await client.guilds.cache.get('804432734066835556')?.commands.fetch()).find((cmd) => cmd.id === '956648338768412771')                   



const permissions = [
	{
		id: '602758334520623125',
		type: 'USER',
		permission: true,
	},
];




  //  setInterval(() => {
    
    
        
  //     }, 1000) 

});




const guildId  = "804432734066835556"
const commands = [{
        name : "partner",
        description: "Creates a Partner with a server",
        options : [{
            name : "name",
            description : "What's the Server Name",
            type : 3,
            required : true
            },{
                name : "type",
                description : "Server or Bot?",
                type : 3,
                choices: [
                    {
                        "name": "bot",
                        "value": "bot"
                    },
                    {
                        "name": "server",
                        "value": "server"
                    }
                    
                ],
                required : true
                },{
                  name : "invite",
                  description : "server or bot invite",
                  type : 3,
                  required : true
                  }
            ]
        
        },{
          name : "slowmode",
          description: "Changes the slowmode",
          options : [{
              name : "amount",
              description : "What's the Server Name",
              type : 10,
              required : true
              } ] 
            },{
            name : "eval",
            description : "Evals a Certain Code",
            default_permission: false,
            options : [{
            name : "code",
            description : "First Argument",
            type : "3",
            required : true,
  }]
  },{
    name : "contest-apply",
    description: "Applies a Contest",
    options : [{
            name : "id",
            description : "User id",
            type : 3,
            required : true
            },{
              name : "owner",
              description : "Owner ID",
              type : 3,
              required : true
              }
        ]
    
    },{
      name : "share-js",
      description : "Share a JS Code",
}
,{
  name:"share-html",
  description : "Share a JS Code",
},{
  name : "info",
  description : "Shows your information"
},{
  name : "share-eris",
  description : "Share a eris Code",
},{
  name : "share-aoi",
  description : "Share a aoi Code",

},{
  name : "apply",
  description : "Staff Apply",
},{
  name : "share-py",
  description : "Shares a PY code",

},{
  name : "share-npm",
  description : "Shares a Npm Package",
  options : [{
    name : "name",
    description : "What's the Npm package name",
    type : 3,
    required : true
  },{
    name : "description",
    description : "What's the Npm package name",
    type : 3,
    required : true

  },{
    name : "developer",
    description : "Who Created the Package",
    type : 3,
    required : false
  }]
},{
  name : "share-bdfd",
  description : "Shares a bdfd code",

},{
  name : "create-vote",
  description: "Creates a vote with a server",
  options : [{
      name : "code-desc",
      description : "What's the Server Name",
      type : 3,
      required : true
      },{
          name : "language",
          description : "Whats the code language",
          type : 3,
          choices: [
              {
                  "name": "Javascript",
                  "value": "js"
              },
              {
                  "name": "Python",
                  "value": "py"
              },
              {
                "name": "BDFD",
                "value": "bdfd"
            },
            {
              "name": "Aoi",
              "value": "aoi"
          },
          {
            "name": "Eris",
            "value": "eris"
        },
        {
          "name": "Php",
          "value": "php"
      },
      {
        "name": "Html",
        "value": "html"
    }
              
          ],
          required : true
          },{
            name : "reactions",
            description : "how many Reactions",
            type : 10,
            required : true
            }
      ]
  
  },{
    name : "points",
    description : "Shows Your Current Points",  
    options : [{
      name : "user",
      description : "user",
      type : 6,
      required : false
      }]
  },{
    name : "manage-points",
    description: "gives a certain user points",
    options : [{
        name : "user",
        description : "specify the user",
        type : 6,
        required : true
        },{
            name : "action",
            description : "Give or remove?",
            type : 3,
            choices: [
                {
                    "name": "add",
                    "value": "give"
                },
                {
                    "name": "remove",
                    "value": "remove"
                }
            ],
            required : true
            },{
              name : "amount",
              description : "The Amout to be Given/Removed from the user",
              type : 10,
              required : true
              }
        ]
    },
    {
      name : "role",
      description : "Adds a role to a user",
      options : [{
        name : "user",
        description : "user name ",
        type : 6,
        required : true
      },
      {
        name : "action",
        description : "whats the action?",
        type : 3,
        choices: [
            {
                "name": "Add",
                "value": "add"
            },
            {
                "name": "Remove",
                "value": "remove"
            }
            
        ],
        required : true
        },
      {
        name : "role",
        description : "Mention the role",
        type : 8,
        required : true
      }]
    },{
      name : "play",
      description : "Plays Your Desired Music!",
      options : [{
      name : "name",
      description : "Just Say the song name and we will play it!",
      type : "3",
      required : true
      }]
  },{
    name : "skip",
    description : "Skipks the music",
},{
  name : "np",
  description : "Now Playing",
},{
  name: "loop",
  description: "Sets loop mode",
  options: [
      {
          name: "mode",
          type: 4,
          description: "Loop type",
          required: true,
          choices: [
              {
                  name: "Off",
                  value: QueueRepeatMode.OFF
              },
              {
                  name: "Track",
                  value: QueueRepeatMode.TRACK
              },
              {
                  name: "Queue",
                  value: QueueRepeatMode.QUEUE
              },
              {
                  name: "Autoplay",
                  value: QueueRepeatMode.AUTOPLAY
              }
          ]
      }
  ]
},{
  name : "npm",
  description : "Gives information about a npm package",
  options : [{
    name : "name",
    description : "package name",
    type : "3",
    required : true
    }]
},{
  name : "github",
  description : "Gives information about a github user",
  options : [{
    name : "name",
    description : "username",
    type : "3",
    required : true
    }]
}]


const rest = new REST({ version: '9' }).setToken(process.env.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands("955416933870751824", "804432734066835556"),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
db.on("ready", async () => {
  console.log("Connected to the database");
});
const Topgg = require("@top-gg/sdk")
const webhook = new Topgg.Webhook(process.env.topgg)

app.post("/dblwebhook", webhook.listener(vote => {
  // vote will be your vote object, e.g
   // 395526710101278721 < user who voted\
  console.log(vote)

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Vote')
					.setStyle('LINK')
          .setURL("https://top.gg/servers/804432734066835556/vote"),
			);




  client.channels.cache.get('957743111482773514').send({content : `**<a:emoji_27:926404495175471115> <@${vote.user}> , Thanks For Voting.**` , components : [row]})
}))



let vera = "602758334520623125";



  

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if(interaction.commandName == "eval"){  
     
    const args = interaction.options.getString('code')

    
    
    if (!vera.includes(interaction.user.id)) interaction.reply(`**ONLY Vèra#2662 Can use this Command**`);

    try {
      var result = args;
      let noResultArg = new Discord.MessageEmbed()
      .setColor("#e31212")
      .setDescription("ERROR: No valid eval args were provided")
      if (!result) return interaction.reply({editReply : [noResultArg] , ephemeral : true })
      let evaled = await eval(result);
      console.log((result));
      

      let resultSuccess = new Discord.MessageEmbed()
      .setColor("#8f82ff")
      .setTitle("Success")
      .addField(`Input:\n`, '```js\n' + `${args}` + '```', false)
      .addField(`Output:\n`, '```js\n' + evaled + '```', true)
      
      interaction.reply({embeds : [resultSuccess] , ephemeral : true })
      
    } catch (error) {
      let resultError = new Discord.MessageEmbed()
      .setColor("#e31212")
      .setTitle("An error has occured")
      .addField(`Input:\n`, '```js\n' + `${result}` + '```', false)
      .addField(`Output:\n`, '```js\n' + `${error.message}` + '```', true)
      //.setDescription(`Output:\n\`\`\`${err}\`\`\``)
      return interaction.reply({embeds : [resultError] , ephemeral : true})
    }

           
      }});

      client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if(interaction.commandName == "partner"){
        await interaction.deferReply();
          if (!vera.includes(interaction.user.id)) return interaction.editReply({content : "Nope ." , ephemeral : true})
        const name = interaction.options.getString('name');
        const string = interaction.options.getString('type');
        const invite = interaction.options.getString('invite')
          console.log(`${name} ${string}  ${invite}`)


        if (string === "bot"){

          let partner = {
            name : name,
            type : "Bot",
            url : invite,
          }
        
          const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel('Join Server')
              .setStyle('LINK')
              .setURL(`${partner.url}`)
              .setEmoji('894173022192300062'),
          );
        let f = client.channels.cache.get("955418302363074601");

        let msg = `<a:vera:926375977477615617> Bot Name: **${partner.name}**\n<a:vera:926375977477615617> Partner Type: **${partner.type}**\n${partner.url}`
        f.send({content : msg , components : [row]})
        await interaction.editReply(`Posted in ${f}`)  
      }else  if (string === "server"){

        let partner = {
          name : name,
          type : "Server",
          url : invite,
        }
      
        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setLabel('Join Server')
            .setStyle('LINK')
            .setURL(`${partner.url}`)
            .setEmoji('894173022192300062'),
        );
      let f = client.channels.cache.get("912003010744438834");

      let msg = `<:power_red_circle:894173022192300062> Server Name: **${partner.name}**\n<:dotfill:949721316553015366> Partner Type: **${partner.type}**\n${partner.url}`
      f.send({content : msg , components : [row]})
      await interaction.editReply(`Posted in ${f}`)  
    }
      
          }})
        
      client.on('messageCreate' , async message => {
        if(message.content.startsWith(prefix + "username")){
        const args = message.content.split(" ").slice(1).join(" ")
       if (!message.author.id === "602758334520623125") return message.react("🤦‍♂️");
        client.user.setUsername(args)
        message.react("🟢")      
        }
        })

      //  name
      client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if(interaction.commandName == "set-username"){
           
            if (!vera.includes(interaction.user.id)) return interaction.editReply({content : "Nope ." , ephemeral : true})
        const username = interaction.options.getString('name');

        client.user.setUsername(username)
        interaction.reply({content : "Done", ephemeral : true}) 
      
      }})
        
      client.on('messageCreate' , async message => {
          if(message.content.startsWith(prefix + "avatar")){
          const args = message.content.split(" ").slice(1).join(" ")
         if (!message.author.id === "602758334520623125") return message.react("🤦‍♂️");
          client.user.setAvatar(args)
          message.react("🟢")      
          }
      })


              
      client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if(interaction.commandName == "slowmode"){
            if (!vera.includes(interaction.user.id)) return interaction.editReply({content : "Nope ." , ephemeral : true})
        const amount = interaction.options.getNumber('amount');

        interaction.channel.setRateLimitPerUser(amount , "idk") 
        interaction.reply({content : "Timeout Set to "+amount}) 
      
        }})

          client.on('messageCreate' , async (message) => {
            if (message.channel.id ==="955419242029797466"){

            message.react("959449440647806986")
            message.react('926374420354859038')
          }
          })

          client.on('messageCreate' , async (message) => {
            if (message.channel.id ==="955419224556335115"){
             if (message.author.id === "602758334520623125") return;
              
            let embed = new Discord.MessageEmbed()
            .setAuthor({name : "New Suggestion" , iconURL : message.author.avatarURL({dynamics  : true})})
            .setColor("BLURPLE")
            .addField("<:emoji_83:926389412093366322> Suggestion" , `${message.content}`)
            .addField("🕰️ Time" , `<t:${Date.now().toString().slice(0 , 10)}:R>` , true)
            .addField("User" , `\`${message.author.id}\`` , true)
            .setThumbnail(message.author.avatarURL({dynamics  : true}))
            message.delete()
            message.channel.send({embeds : [embed]}).then(async(f) => {
              f.react("926389413733355560")
              f.react("❌")
            })
            
          }else return;
          })










          
      client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if(interaction.commandName == "contest-apply"){
        await interaction.deferReply();
          if (!vera.includes(interaction.user.id)) return interaction.editReply({content : "Nope ." , ephemeral : true})
          let i = 1;
        const botid = interaction.options.getString('id');
        const owner = interaction.options.getString('owner')
          console.log(` ${botid}  ${owner}`)

        let b = await client.users.fetch(botid)
        let o = await client.users.fetch(owner)
        console.log(o)
        console.log(b)
        let f = client.channels.cache.get("955839522283859978");

        let msg = `<:emoji_83:926389412093366322> \`#${i++}\`\n<:emoji_83:926389412093366322> Bot Name: **${b.username}**\n<:emoji_83:926389412093366322> Bot Owner: **${o.username}**\n`
        f.send({content : msg}).then(async(i) => {
          i.react('926389412093366322')
        })
        f.send('https://images-ext-1.discordapp.net/external/mH7VBag_P2XLskZu8nwSngtZyT2kjVB_wEKtZQwdUFI/https/media.discordapp.net/attachments/912003017849581629/953214926816673792/B06kEfYQgVAKAAAAAElFTkSuQmCC.png')
        await interaction.editReply(`Posted in ${f}`)
      
      
          }})



          
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-js"){
             if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_1")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(0)
        .setMax(4000)
        .setCustomId("ask_2"),
        new DiscordModal.TextInputField()
        .setLabel("Version ")
        .setStyle("short")
        .setMin(0)
        .setMax(4)
        .setCustomId("ask_22")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code'){

    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', `${interaction.fields[0].value}`)
    .setD('Code', '\`\`\`js\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Version', '\`\`\`js\n' + interaction.fields[2].value + '\n\`\`\`')

    .addField('Copyrights', `${interaction.user}`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('955412875168587796');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&955869604041875546> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })

      
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-eris"){
      
       if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code-eris")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_1")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(0)
        .setMax(4000)
        .setCustomId("ask_2")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code-eris'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', `${interaction.fields[0].value}`)
    .addField('Code', '\`\`\`js\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Copyrights', `${interaction.user}`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('957257305244696687');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&957266074733252672> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })

 client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-html"){
 if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");
      
      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code-html")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_1")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(0)
        .setMax(4000)
        .setCustomId("ask_2")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code-html'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', `${interaction.fields[0].value}`)
    .addField('Code', '\`\`\`html\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Copyrights', `${interaction.user}`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('957269606374998066');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&957269676184989736> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })



         
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-aoi"){
            if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

      
      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code-aoi")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_1")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(10)
        .setMax(4000)
        .setCustomId("ask_2")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code-aoi'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', '\`\`\`' + interaction.fields[0].value + '\`\`\`')
    .addField('Code', '\`\`\`js\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Copyrights', `${interaction.user}`)
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('955883898120835132');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&956151759993192458> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })


    
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "apply"){
      
      const textinput = new DiscordModal.TextInput()
      .setCustomId("staff_application")
      .setTitle("Velvet Staff Application")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Real Name")
        .setStyle("short")
        .setPlaceholder("Adham")
        .setCustomId("ask_5")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Age")
        .setStyle("short")
        .setMin(0)
        .setMax(3)
        .setCustomId("ask_9"),
        new DiscordModal.TextInputField()
        .setLabel("Languages")
        .setStyle("short")
        .setMin(0)
        .setMax(50)
        .setCustomId("ask_4")
        .setPlaceholder("Javascript , Python , Html ...ect")

        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'staff_application'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Vélvét Staff Application'})
    .addField('Name', `${interaction.fields[0].value}`)
    .addField('Age', `${interaction.fields[1].value}`)
    .addField('Languages', `${interaction.fields[2].value}`)
    .addField('Applier', `${interaction.user} (\`${interaction.user.id}\`)`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('956161285580546048');
    await interaction.editReply({content : `<a:emoji_27:926404495175471115> Thanks for Applying .`})
    f.send({content  : '<@&926107287603539978>' , embeds : [embed]})

  }
 })


 
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-py"){
             if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code-py")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_1")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(10)
        .setMax(4000)
        .setCustomId("ask_22")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code-py'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', `${interaction.fields[0].value}`)
    .addField('Code', '\`\`\`py\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Copyrights', `${interaction.user}`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('955882165692923964');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&955869691941912686> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })


 client.on(`interactionCreate`,async (interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-npm"){
             if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

    const pkgname = interaction.options.getString('name')
    const pkgdesc = interaction.options.getString('description')
    const pkown = interaction.options.getString('developer')
    let own = ' '
    if (pkown){
     let f  = await client.users.fetch(pkown) 
     let own = `\n<:VerifiedBot:926376062684889118> Developer: ${f.username} (\`${f.id}\`)`
    }
    let i = client.channels.cache.get('956179211507363840');
    let link = 'https://www.npmjs.com/package/' + pkgname;
    i.send(`<:npm_logo:956182070495961118> **${pkgname}**\n**${pkgdesc}**\n${own}\n${link}`)
    i.send('https://cdn.discordapp.com/attachments/926107349909921792/956194840666853407/RoAuqVtzzjnCvAcnjWzz3wlussOPYybcfnYjwB9DNG39eJnWtOQOYfZNyKEdaPSB3qUDUfNggOWO5cAaK96DpsQ7uutog1H4gEN66InAWgOn6EvE4AEMLYRQLvynA3HwdciwUHxkShgHYHZgB0ugmh1D5clMYLy2GbENbUy0LqUaufM9Yb0SxW84FWAGjJeoOucZUCGsZRwbdZA53TUGvV0KPgM469sXPNCAD9f6CMoJ8BcWVAAAAAElFTkSuQmCC.png')
    interaction.reply(`Posted at ${i}`)
  }
}})


// client.on('guildMemberAdd' , async (member) => {
//   let ff = client.channels.cache.get('926107320382025798');

//   let user = member.guild.members.cache.get(member.id)


//   member.user.fetch({ force: true }).then((user) => {
//     if(user.banner !== undefined || user.banner !== null) {
//       let embed = new Discord.MessageEmbed()
//       .setAuthor(`${member.user.tag} Banner`, member.user.displayAvatarURL({ dynamic: true }))
//       .setTitle(`Download Banner`)
//       .setURL(user.bannerURL({ dynamic: true, size: 4096 }))
//       .setImage(user.bannerURL({ dynamic: true, size: 4096 }))
//       .setFooter(`Requested By ${member.tag}`, member.displayAvatarURL({dynamic: true}))
//       ff.send({ embeds: [embed] })
//     }
//   })


// client.on('guildMemberAdd' , async (member) => {
//   let ff = client.channels.cache.get('955863033262010398');

//   ff.send(member).then((m)=>{
//     m.delete()
//   })
//   })



// // })

process.on("unhandledRejection", error => console.error("Promise rejection:", error)
);


// client.on('guildCreate' , async (guild) => {
//   if (guild.memberCount < 25){
//     let f = client.users.cache.get(guild.ownerId);
//     console.log(guild.ownerId)
//     let embed = new Discord.MessageEmbed()
//     .setAuthor({name : client.user.username , iconURL : client.user.avatarURL({dynamic:true})})
//     .setThumbnail(client.user.avatarURL({dynamic:true}))
//     .setDescription(`I've Left ${guild.name}!`)
//     .setColor('BLURPLE')
//     .addField(`Reason` , `Users Under than 25 members` , true)
//     .setFooter({text : "This System is Temporarly", iconURL : client.user.avatarURL({dynamic:true})})
//    await f.send({embeds : [embed]})

//    guild.leave()
//   }
// })


 
client.on(`interactionCreate`,(interaction)=>{
  if(interaction.isCommand()){
   if(interaction.commandName == "share-bdfd"){
             if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("Not a Support Member");

      const textinput = new DiscordModal.TextInput()
      .setCustomId("submit-code-bdfd")
      .setTitle("Submit a Code")
      .addComponents(
        new DiscordModal.TextInputField()
        .setLabel("Code Name")
        .setStyle("short")
        .setPlaceholder("Ping Command")
        .setCustomId("ask_11")
        .setRequired(true),//Its default value is false,
        new DiscordModal.TextInputField()
        .setLabel("Code ")
        .setStyle("paragraph")
        .setMin(10)
        .setMax(4000)
        .setCustomId("ask_24")
        )
        client.TextInputs.open(interaction, textinput) 
    }
  }
 })
 
 client.on("interactionTextInput",async(interaction)=>{
  if(interaction.customId == 'submit-code-bdfd'){
    await interaction.deferReply()
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setAuthor({name : 'Code Submittion'})
    .addField('Code Name', `${interaction.fields[0].value}`)
    .addField('Code', '\`\`\`js\n' + interaction.fields[1].value + '\n\`\`\`')
    .addField('Copyrights', `${interaction.user}`) 
    .setThumbnail(interaction.guild.iconURL({dynamics:true}))
     let f = client.channels.cache.get('955882228297134140');
    await interaction.editReply({content : `Posted in ${f}`})
    f.send({content  : '<@&955869717946585138> New Code!' , embeds : [embed]})
    let points = await db.get(`user_${interaction.user.id}.points`)
    if(points === null) points = 0;
    await db.add(`user_${interaction.user.id}.projects` , 1)  }
 })


client.on('interactionCreate' , async (interaction) => {
  if(interaction.isCommand()){
    if(interaction.commandName === 'create-vote'){
      const desc = interaction.options.getString('code-desc')
      const lang = interaction.options.getString('language')
      console.log(lang)
      const num = interaction.options.getNumber('reactions')
      let channel = client.channels.cache.get('956254514837598288');
      if (lang === "js"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&955869604041875546>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })      }else if (lang === "py"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&955869691941912686>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }else if (lang === "bdfd"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&955869717946585138>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }else if (lang === "aoi"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&956151759993192458>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }else if (lang === "html"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&956151759993192458>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }else if (lang === "php"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&956151759993192458>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }else if (lang === "eros"){
        channel.send(`<a:veka:926404496714764289> **Code** : ${desc}\n<:VerifiedBot:926376062684889118> **Language**: ${lang}\n<a:pi:926389413733355560> **Number**: ${num}\n From ${interaction.user} \n<@&956151759993192458>`).then((m) => {
          m.react('926389413733355560')
          channel.send('https://media.discordapp.net/attachments/926107349909921792/956511886709522492/xpgBoP8PZiHwFV2T0AsAAAAASUVORK5CYII.png')
        })
      }
      interaction.reply(`Posted in ${channel}`)
    }
  }
})






client.on('messageCreate' , async (message) => {
  let bw = ['كسمك' , 'كس' , 'كتفم' , 'عرص' , 'نيك' , 'انيكك' , 'شرموطة' , 'شرمطة']

  if (bw.includes(message.content)){
    let role = message.guild.roles.cache.get('957094357104721921');
    message.delete()
    message.guild.members.cache.get(message.author.id).roles.add(role)
    let logchn = client.channels.cache.get('957082643609030736');

    let embed = new Discord.MessageEmbed()
    .setAuthor({name : `Urgent Security Issue` , iconURL:client.user.avatarURL({dynamic:true})})
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setColor("BLURPLE")
    .addField('Suspect' , `\`${message.author.id}\`` , true)
    .addField('Channel' , `\`${message.channel.id}\`` , true)
    .addField('Message' , `${message.content}` , true)
    
    .addField('Action(s) Taken' , `\`-\` Deleted Message\n\`-\` Added ${role} Permanantly!` , true)
    .addField('Reason' , `Curse Track` , true)
    .addField('Time' , `<t:${Date.now().toString().slice(0 , 10)}:R>` , true)
    .addField('Mention' , `${message.author}` , true)

    .setFooter({text : message.guild.name , iconURL : message.guild.iconURL({dynamic:true}) })



    logchn.send({content : `**<@&957094795120095232> ~ ~**` , embeds : [embed]})

    let warnen = new Discord.MessageEmbed()
    .setAuthor({name : `You've Been Muted Due to Sending Curse Words .` ,iconURL :client.user.avatarURL({dynamic:true})})
    .addField('You Think this is a mistake?' , "Contact (Vélvét#2662) Privatly")
    .setFooter({text : `Happy Mute :3.` , iconURL: client.user.avatarURL({dynamic:true})})
    .setColor("BLURPLE")
    .setThumbnail(client.user.avatarURL({dynamic:true}))

    let warnar = new Discord.MessageEmbed()
    .setAuthor({name : `انت خدت ميوت للروشنة الزيادة` ,iconURL :client.user.avatarURL({dynamic:true})})
    .addField("فاكر ان الي عملته دا غلط؟" , 'كلم Vélvét#2662')
    
    .setFooter({text : `يارب تكون مبسوط <3 ` , iconURL: client.user.avatarURL({dynamic:true})})
    .setColor("BLURPLE")
    .setThumbnail(client.user.avatarURL({dynamic:true})) 


    message.author.send({embeds : [warnen , warnar]})
    
  }else {
    if(message.channel.id ==='957082643609030736'){
      if (message.author.id === client.user.id) return message.react('926389413733355560')
      message.delete()
        message.channel.send(`**${message.author} This ROOM IS RISTRICTED!**`)
      
    }
  }
})



client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if (!message.member.roles.cache.has("959579466781311016")) return;

  if (message.content === 'خط'){
    message.channel.send('https://cdn.discordapp.com/attachments/957351624387461181/957656239557472356/f4a67db920246822.png')
  }
})

client.on('guildMemberBoost', (member) => {
    let channel = client.channels.cache.get('926107310856745010');

        let embed = new Discord.MessageEmbed()
        .setAuthor({name : `${member.user.username} Just Boosted the Server` , iconURL : member.guild.iconURL({dynamic:true})})
        .setDescription(`**<a:emoji_50:926374484204736553> Thanks For Boosting \n<:velvetpremuim:957999308072960000>  I've Gave You Your <@&926542927763759144> Role**`)
  .setColor('BLURPLE')
  channel.send({content : `${member} ~`,embeds : [embed]})
});

client.on('messageCreate', message => {
	if (message.content.startsWith('!boost')) {
if (!message.author.id === '602758334520623125') return;
const member = message.mentions.members.first() ? message.mentions.members.first() : message.member
		client.emit('guildMemberBoost',  member);
	}
});

client.on('messageCreate', message => {
	if (message.content.startsWith('!join')) {
if (!message.author.id === '602758334520623125') return;
const member = message.mentions.members.first() ? message.mentions.members.first() : message.member
message.delete()
		client.emit('guildMemberAdd',  member);
	}
});


client.on('guildMemberAdd' , async (member) => {
  let background = await Canvas.loadImage('https://media.discordapp.net/attachments/958033245302292491/958087765793325056/b4ce22dd423f7b4c.png?width=1440&height=536')
  let avatar = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));
  let username = member.user.username.length > 13 ? member.user.username.substring(0, 12) + "..." : member.user.username;
  var channel = client.channels.cache.get('926107305982959636');
  var canvas = await Canvas.createCanvas(400, 148.8) 
  var ctx = await canvas.getContext('2d');
  ctx.drawImage(background, 0, 0, 400, 148.8);
  ctx.font = "22px Arial";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "left";
  ctx.fillText(username, 280, 90);  
  ctx.beginPath();
  ctx.arc(199.4, 74.4, 74.4, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 125, 0, 148.8, 148.8)

  /*****************************************************/
  let message = `**<a:emoji_27:926374948308672533> ${member} , Welcome to ${member.guild.name}.\n<a:emoji_27:926374948308672533> Member Number ${member.guild.memberCount.toLocaleString()}**   `
  channel.send({ content : message,files:[canvas.toBuffer()]});
  let meme = client.channels.cache.get('964115035414724648');
  meme.setName(`MemberCount ${channel.guild.memberCount.toLocaleString()}`)
}) ; 


client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  
  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send({ content: `${message.author}, Congrats!! You have leveled up to **#${user.level}**. :tada:` });
  }
});


client.on('messageCreate', async (message) => {
if (message.content=== 'd!points'){

  const target = message.mentions.users.first() || message.author; // Grab the target.

  const user = await Levels.fetch(target.id, message.guild.id, true); // Selects the target from the database.
  
  const rank = new canvacord.Rank() // Build the Rank Card
      .setAvatar(target.displayAvatarURL({format: 'png', size: 512}))
      .setCurrentXP(user.xp) // Current User Xp
      .setRequiredXP(Levels.xpFor(user.level + 1)) // We calculate the required Xp for the next level
      .setRank(user.position) // Position of the user on the leaderboard
      .setLevel(user.level) // Current Level of the user
      .setProgressBar("#FFFFFF")
      .setUsername(target.username)
      .setDiscriminator(target.discriminator);

  rank.build()
      .then(data => {
      const attachment = new Discord.MessageAttachment(data, "RankCard.png");
      message.channel.send({files : [attachment]});
  });

}
  })

  client.on('messageCreate', async (message) => {
    if (message.content=== prefix + 'top'){
      const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

      if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
      
      const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
      
      const lb = leaderboard.map(e => `\`#${e.position}.\` ${e.username} - Level: **${e.level}** - XP: ${e.xp.toLocaleString()}`); // We map the outputs.
      
      message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
    
      ;}
      })
    


client.on('interactionCreate' , async (interaction) => {
  if (interaction.isCommand()){
    if (interaction.commandName === 'points'){
      if (interaction.user.bot) return;
        await interaction.deferReply()

        let user = interaction.options.getUser('user')
        if (!user){
          user = interaction.user;
        }
        
        let points = await db.get(`user_${user.id}.points`)
        if(points === null) points = 0;
        console.log(points)
        // let embed = new Discord.MessageEmbed()
        // .setColor('BLURPLE')
        // .setAuthor({name : `${user.username}`, iconURL: user.avatarURL({dynamic:true})})
          
        // .setThumbnail(interaction.guild.iconURL({dynamic:true}))
        // .addField(`User Points` ,`${points}`, true)
        // .setFooter({text  :client.user.username , iconURL : interaction.guild.iconURL({dynamic:true})})


      const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png' }))
    .setCurrentXP(points)
    .setRequiredXP(1000)
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);
      rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "rank.png");
        interaction.editReply({files: [attachment]})
    });
      
    }
  }
})


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if(interaction.commandName == "manage-points"){
     
    const user = interaction.options.getUser('user');
    const integer = interaction.options.getNumber('amount');
    const choice = interaction.options.getString('action')
     
    if (await db.get(`user_${user.id}.points`) === null){
     await db.set(`user_${user.id}.points` , 0)
    }
     
    if (!interaction.member.roles.cache.has("926107281395945473")) return interaction.reply("Not a Creator.");


    if (choice === "give"){
      await db.add(`user_${user.id}.points` , integer)
      interaction.reply({content : `**${interaction.user.username} added ${integer} Points to ${user.username}**`})
    }else  if (choice === "remove"){
      await db.subtract(`user_${user.id}.points` , integer)
      interaction.reply({content : `**${interaction.user.username} removed ${integer} Points to ${user.username}**`})
    }else{
      interaction.reply({content : `Something Wrong Happened ..`})
        }
      }});


      client.on('messageCreate' , async (message) => {
        if (message.content.startsWith('d!' + 'short')){
          const code = message.content.split(" ").slice(1).join(" ");

          const bin = await sourcebin.create(
            [
                {
                    content: code,
                    language:"js",
                },
            ],
            {
                title: `Command Created By Developer-Center`,
                description: 'Coded By discord.gg/dev-center',
            },
        );
        message.channel.send({content : `${message.author}\n${bin.url}`})
        }
      })



    //   client.on('messageCreate', async (message) => {
    //     if(message.content === ('d!' + 'top')) {
        
    //       const array =(await  db.all()).filter(i => i.ID.startsWith(`user_`)).sort((a, b) => b.data.points - a.data.points); // sorted balances
    //       let content = "";
    //       // create the leaderboard message
    //       let current = await db.get(`user_${message.author.id}`)
    //       for (let i = 0; i < 10; i++) {
    //           let user = client.users.cache.get(array[i].ID.split('_')[1]);
    //           console.log(user) // get the user name from id
    //           if (user.bot){
    //             await db.delete(`user_${user.id}`)
    //           }
    //           content += `\`#${i + 1}\` ${user} - ${array[i].data.points}\n` // add the user's position and their name and balance
    // }

    //           let i = 1;
    //           let embed1 = new Discord.MessageEmbed()
    //           .setAuthor({name : `Points LeaderBoard` , iconURL : message.guild.iconURL({dynamic : true})})
    //           .setThumbnail(message.guild.iconURL({dynamics : true}))
    //           .setDescription(content)
    //           .setColor('BLURPLE')
    //           .addField(`> ${message.author.username} Stats` , `Points : **${current.points}**`)
    //           .setImage("https://is.gd/eDKiyC")
    //           message.reply({ embeds: [embed1]});
           
        
    //     }
    //     });
        
        client.on('messageCreate' , async (message) => {
          if (message.content === prefix + 'send-panel'){
            if (!message.member.roles.cache.has("926107281395945473")) return message.reply("INVALID PERMISSION.");

            let embed = new Discord.MessageEmbed()
            .setAuthor({name : "Developers Center" , iconURL : message.guild.iconURL({dynamics : true})})
            .setColor("BLURPLE")
            .setDescription("**Open a Ticket by Clicking the Button**")
            .setThumbnail(message.guild.iconURL({dynamics : true}))
            .setFooter("Please don't open a ticket for no reason.")
            
            
            const row = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setLabel('Open Ticket')
                .setStyle('PRIMARY')
                .setCustomId("ticket_btn")
                );

            message.channel.send({embeds  : [embed] , components : [row]})
          }
        })



        client.on('interactionCreate' , async (interaction) => {
          if (interaction.isButton()){
            if (interaction.customId === 'ticket_btn'){
             let value = await db.get(`tickets_${interaction.user.id}`)
              if (value === true){
                interaction.reply({content : "You Already Have a Ticket Opened!" , ephemeral :true})
              }else{
                db.set(`tickets_${interaction.user.id}` , true)
              }
              interaction.guild.channels.create(`${interaction.user.username}`, { //Create a channel
                type: 'text', //Make sure the channel is a text channel
                parent : '958780751371972621',
            }).then((newChannel) => {

       newChannel.permissionOverwrites.edit(interaction.guild.roles.everyone.id, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false,
                ATTACH_FILES: false
              })

              newChannel.permissionOverwrites.edit(interaction.user.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
                ATTACH_FILES: true
              })

              newChannel.setTopic(interaction.user.id)
              let embed = new Discord.MessageEmbed()
              .setAuthor(`Developers Center`)
              .setDescription("Please wait for the support team.")
              .addField(`Ticket Author` , `${interaction.user.tag}`, true)
              .addField(`Date` , `<t:${Date.now().toString().slice(0 , 10)}:R>` , true )
              .setColor("BLURPLE")
              .setThumbnail(interaction.guild.iconURL({dynamics  : true}))

              const row = new MessageActionRow()
              .addComponents(
                new MessageButton()
                  .setLabel('Close Ticket')
                  .setStyle('DANGER')
                  .setCustomId("close_btn"),
                  new MessageButton()
                  .setLabel('Transfer to Owners')
                  .setStyle('PRIMARY')
                  .setCustomId("owners_btn"),
                  );

              newChannel.send({content : '<@&959579466781311016> ~',embeds : [embed] ,  components : [row]})



                  interaction.reply({content : `Ticket Opened at ${newChannel}` , ephemeral :true})
              })
            }
          }
        })



        client.on('interactionCreate' , async (interaction) => {
          if (interaction.isButton){
            if (interaction.customId === 'close_btn'){
              db.delete(`tickets_${interaction.channel.topic}`)


            
              let log = client.channels.cache.get('960150196703076382');
              let channel = interaction.channel;
              const attachment = await discordTranscripts.createTranscript(channel , {
                returnBuffer: false,
                fileName: 'ticket.html'
              });

              let userr = client.users.cache.get(interaction.channel.topic);
              interaction.channel.permissionOverwrites.edit(userr.id, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false,
                ATTACH_FILES: false
              })
              let embed = new Discord.MessageEmbed()
              .setAuthor({name : `Developers Center` , iconURL : interaction.guild.iconURL({dynamics  : true})})
              .addField(`Ticket Owner` , `${userr.username}` , true)
              .setColor("BLURPLE")
              
              
              log.send({
                embeds : [embed],
                files: [attachment]
            });


            const row = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setLabel('Delete Ticket')
                .setStyle('DANGER')
                .setCustomId("delete_btn")
                );

              interaction.reply({content : `Ticket Closed By ${interaction.user}`, components : [row]})              

            }
          }
        })

        client.on('interactionCreate' , async (interaction) => {
          if (interaction.isButton()){
            if (interaction.customId === 'delete_btn'){
              if (!interaction.member.roles.cache.has("959579466781311016")) return interaction.reply("INVALID PERMISSION.");

              await interaction.channel.delete()

            } else  if (interaction.customId === 'owners_btn'){
            
              const coders = interaction.guild.roles.cache.get("959579466781311016")
              const staff = interaction.guild.roles.cache.get("959578322650689606")

              let roles = interaction.member.roles.cache;
  if(roles.has('959579466781311016') || roles.has('959578322650689606')) {
              interaction.channel.permissionOverwrites.edit(coders, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false,
                ATTACH_FILES: false
              })
              interaction.channel.permissionOverwrites.edit(staff, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false,
                ATTACH_FILES: false
              })

              await interaction.reply(`<a:pi:926389413733355560> Ticket Transfered to <@&926107281395945473>.`)
            }}
          }
        })


      client.on('interactionCreate' , async (interaction) => {
        if (interaction.isCommand()){
          if (interaction.commandName === 'role'){
            if (!interaction.member.roles.cache.has("926107281395945473")) return interaction.reply("Not a Creator");

            let user = interaction.options.getUser('user')
            let role = interaction.options.getRole('role')
            const choice = interaction.options.getString('action')
            console.log(choice)
            let throle = interaction.guild.roles.cache.get(role.id);

            if (choice === 'add'){
              interaction.guild.members.cache.get(user.id).roles.add(throle)
  
              interaction.reply(`<a:Future97:959449440647806986> ${role.name} Added to ${user}`)

            }else if (choice === 'remove'){
              interaction.guild.members.cache.get(user.id).roles.remove(throle)
              interaction.reply(`<a:Future97:959449440647806986> ${role.name} Removed from ${user}`)

            }

  

          }
        }
      })
  
tracker.on('guildMemberAdd', (member, type, invite) => {

  const welcomeChannel = member.guild.channels.cache.find((ch) => ch.id === '926117342092607589');

  if(type === 'normal'){
      welcomeChannel.send(`<a:Future97:959449440647806986> | Welcome To Developers Center 🌙
      <a:emLoading:959449435199397908> | Name ${member} 
      <a:emLoading:959449435199397908> | User Position ${member.guild.memberCount.toLocaleString()}
      <a:emLoading:959449435199397908> | Invited By ${invite.inviter.username}`);
  }

  else if(type === 'vanity'){
      welcomeChannel.send(`<a:Future97:959449440647806986> | Welcome To Developers Center 🌙
      <a:emLoading:959449435199397908> | Name ${member} 
      <a:emLoading:959449435199397908> | User Position ${member.guild.memberCount.toLocaleString()}
      <a:emLoading:959449435199397908> | Invited By Vanity URL (.gg/**dev-center**)`);
  }


  else if(type === 'unknown'){
      welcomeChannel.send(`<a:Future97:959449440647806986> | Welcome To Developers Center 🌙
      <a:emLoading:959449435199397908> | Name ${member} 
      <a:emLoading:959449435199397908> | User Position ${member.guild.memberCount.toLocaleString()}
      <a:emLoading:959449435199397908> | Invited By Vanity URL (.gg/**dev-center**)`);
  }

});


const fetch = require('node-fetch')
client.on('interactionCreate' , async (interaction) => {
  if (interaction.isCommand()){
    if (interaction.commandName === 'npm'){
      let por = interaction.options.getString('name')

             const res = await fetch(`https://registry.npmjs.com/${encodeURIComponent(por)}`).catch(err => console.log(err));
          if (res.status === 404) return interaction.reply({ content: `No reasults found for **${por}** `, ephemeral: true })
             const body = await res.json();
          const embed = new Discord.MessageEmbed()
        .setColor(`#2f3136`)
        .setTitle(body.name)
        .setURL(`https://www.npmjs.com/package/${body.name}`)
        .setDescription(body.description || 'No description.')
        .addField('❯ Version', body['dist-tags'].latest, true)
        .addField('❯ License', body.license || 'None', true)
        .addField('❯ Keywords', `${body.keywords}` || 'None', true)
        .addField('❯ Author', body.author ? body.author.name : '???', true)
        .addField('❯ Creation Date', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
        .addField('❯ Modification Date', body.time.modified ? moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss') : 'None', true)
        .addField('❯ Repository', body.repository ? `[View Here](${body.repository.url.split('+')[1]})` : 'None', true)
        .setThumbnail(`https://authy.com/wp-content/uploads/npm-logo.png`)
        .addField('❯ Maintainers', body.maintainers.map(user => user.name).join(', '), true)
         interaction.reply({ embeds: [embed] })
       }
  
  }
});


client.on('interactionCreate' , async (interaction) => {
  if (interaction.isCommand()){

                 if (interaction.commandName === "github") {
        let por = interaction.options.getString('username')
            
  fetch(`https://api.github.com/users/${por}`)
    .then(res => res.json()).then(body => {
      if(body.message) return interaction.reply({ content: `No reasults found for **${por}** `, ephemeral: true })

    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;
 
              
      
          const embed = new Discord.MessageEmbed()
        .setColor(`#2f3136`)
           .setAuthor(`${login} Information!`, avatar_url)
            .setColor(`#2f3136`)
            .setThumbnail(`${avatar_url}`)
            .addField(`Username`, `${login}`)
            .addField(`ID`, `${id}`)
            .addField(`Bio`, `${bio || "No Bio"}`)
            .addField(`Public Repositories`, `${public_repos || "None"}`, true)
            .addField(`Followers`, `${followers}`, true)
            .addField(`Following`, `${following}`, true)
            .addField(`Location`, `${location || "No Location"}`)
            .addField(`Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
                
         interaction.reply({ embeds: [embed] })
    })
       }
  }})
    
  let line = "https://cdn.discordapp.com/attachments/957351624387461181/957656239557472356/f4a67db920246822.png"; // رابط الخط
const ss = ['has transferred' , '78948']
client.on("messageCreate", async (message) => {
  if (message.author.id === '567703512763334685'){
    if (message.content.includes(ss)){
      let role = message.guild.roles.cache.get('926542927763759144');
      message.guild.members.cache.get(message.author.id).roles.add(role)
      message.channel.send(`Premuim Acces Unlocked.! \n\n${message.author} Thanks.`)
    }
  }
});

// client.on('messageCreate', message => {
//   if (message.content.startsWith(prefix + "buy-premuim")){
//       if (message.author.bot) return;
//       const owner = "602758334520623125"
//       const price = "2"
//       message.channel.send(`امامك دقيقتين فقط للتحويل\n\`\`\`#credits ${owner} ${price}\`\`\``).then(me => {
//           const filter = me.author.id == message.author.id
//           message.channel.awaitMessages({filter, max: 1, time: 2000*60, errors: ['time'] }).then(tany => {
//               if (tany.first().content != `#credits <@!${owner}> ${price}`) return message.reply("Wront Syntax!")
//               const filter2 = tany.author.id == "567703512763334685"
//               message.channel.awaitMessages({filter, max: 1, time: 5000, errors: ['time'] })
//               message.channel.awaitMessages({filter, max: 1, time: 10000, errors: ['time'] }).then(check => {
//                   if(check.first().content != `**:moneybag: | ${message.author.username}, has transferred \`$75000\` to <@!${owner}> **`) return message.channel.send("You did not transfer1")
//                   message.channel.send("Premuim Accesable!")
//                   message.member.roles.add("926542927763759144")
//               })
//           })
//       })
//   }
// })

client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + "buy premuim")){
      if (message.author.bot) return;
      const owner = "832714152391737355"
      const price = "78947" //المبلغ قبل الضريبه
    const price2 = "75000" // المبلغ بعد الضريبه

      let embed = new Discord.MessageEmbed()
      .setAuthor(`Attempt to Purchase Premuim Rank`)
      .addField(`Please Type the Following ` , `\`\`\`#credits ${owner} ${price}\`\`\`` , true)
      .setColor('BLURPLE')
      .setThumbnail(message.author.avatarURL({dynamics : true}))
      message.channel.send({embeds : [embed]}).then(me => {

          message.channel.awaitMessages({ max: 1, time: 2000*60, errors: ['time'] }).then(tany => {
              if (tany.first().content != `#credits ${owner} ${price}`) return message.reply("Canceled **Re-Do the Command**")
              const filter2 = message.author.id == "567703512763334685"
              message.channel.awaitMessages({filter2, max: 1, time: 5000, errors: ['time'] }).then(tt => {
                  message.channel.awaitMessages({ max: 1, time: 10000, errors: ['time'] }).then(check => {

message.channel.awaitMessages({filter2, max: 1, time: 5000, errors: ['time'] }).then(check2 => {

                      if(check2.first().content != `**:moneybag: | ${message.author.username}, has transferred \`$${price2}\` to <@!${owner}> **`) return message.channel.send("امك صاحبتي محولتش لي ؟")
                      let embed = new Discord.MessageEmbed()
                      .setColor('BLURPLE')
                      .setAuthor(`${message.author.username} Purchased Premuim Rank.`)
                      message.channel.send({embeds : [embed]})
                      message.member.roles.add("926542927763759144")

})
                  
                  })
              })
          })
      })
  }
})




client.login(process.env.token);