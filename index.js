const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

const prefix = "-";

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`, `everyone`],
        repliedUser: true, 
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_MEMBERS",
        "GUILD_WEBHOOKS",
        "GUILD_VOICE_STATES",
        "GUILD_MESSAGE_REACTIONS",
      
        
    ],
});

client.login("TOKEN");

client.on("ready", () => {
    console.log("Bot is online");

    client.user.setActivity(".gg/srp2", {type: "WATCHING" });
});

client.on("messageCreate", (message) => {

    if(message.channel.id == "1021207055727607880") {
        message.react("1021125694002049065")
        message.react("1021125730949672971") 
      }
    
    if(message.channel.id === "1024830430664470570") {
        message.react("1024831599445024828")
        message.react("1024831626645086319")
        message.react("1024831674497908776")
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array var 

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //test command 

    if (command === "test") {
        message.channel.send("The test has worked");
    }
    if (command === 'say') {
        message.channel.send(`${args.join(" ")}`)
        message.delete()
    }
    
    if (command === 'hack') {
        message.channel.send(`TYD has been hacked L L L L LL  L L L L L L L L  L`)
        message.delete()
    }
    
    if (command === 'ssufull') {
        message.channel.send('**Our Server Start up is currently full in players. Keep trying to join as we will have many spots open!**')
        message.delete()
    }

    if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;
    
    if (command === 'ssulow') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Server Start Up Low In players`)
        .setDescription(`Our Server Start Up is currently low on players.
    <:icons_text3:1021202272627195944> **Server Name:** **Seattle Roleplay 2 | VC Optional**
    <:icons_text6:1021201858984935484> **Server Owner:** **N_Nxthan**
    <:icons_text6:1021201858984935484> **Current Players:** ${args[0]}
    <:icons_text1:1021201821823418400> **Server Code:** **SeattlE**`)
        
    message.delete()
    if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;
    message.channel.send({embeds: [embed] })
    }
    
    if (command === 'donation') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Robux Donation!`)
        .setDescription(`<:Seattle:1020896096530215005> | **${message.mentions.members.first().tag} *Has just purchased ${args.slice(1).join(" ")} Robux! Thank you for Donating to Seattle Roleplay!* <:Robux_1:1021125793662898279>`)
       
        if (!message.member.roles.cache.find(r => r.id === "1020888680132517908")) return;
        
        message.delete()
        const channel = message.guild.channels.cache.get('1021203656139341905')
        channel.send({embeds: [embed] }).then(msg => {
            msg.react("<:donations:1025168671074684958>");
        })
    }
    
    if (command === 'timezone'){
        const embed = new MessageEmbed()
        .setColor(`BLUE`) 
        .setTitle(`New Staff Timezone`) 
        .setDescription(`<@${message.author.id}>, I set your timezone to ${args[0]}.`)
        .setTimestamp()
        message.delete()
        if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;
        message.channel.send({embeds: [embed] })
    }
    
    if (command === 'tweet') {
        const embed = new MessageEmbed()
        
        .setColor(`BLUE`)
        .setTitle(`A tweet has been posted!`)
        .setAuthor({ name: `${message.author.username}#${message.author.discriminator}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setDescription(`${args.join(" ")}`)
        
        message.delete()
        const channel = message.guild.channels.cache.get('1024830430664470570')
        channel.send({embeds: [embed] })
    }
    
    if (command === 'embed') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Seattle Partnerships`)
        .setDescription(`${args.join(" ")}`)
        
        message.channel.send({ embeds: [embed] })
        message.delete()
    }

    if (command === 'interview') {
      const embed = new MessageEmbed()
      .setColor(`BLUE`)
      .setTitle(`Staff Interview`)
      .setDescription(`A Staff Interview is going to be hosted by <@${message.author.id}> in about ${args[0]} minutes. Be sure you are ready and Join <#1023422222548860938> and wait to be dragged into a interview room by <@${message.author.id}>.`)
      .setTimestamp()
      .setFooter(`Good Luck!`)

        message.delete()
        message.channel.send({content: '<@&1021042715766554665>', embeds: [embed]})
        if (!message.member.roles.cache.find(r => r.id === "1023421686982385754")) return;
    }
    
    if (command === 'ping') {
        message.channel.send("Pong!")
        message.delete()
    }
    
    if (command === 'ad') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Seattle Roleplay 2 Server Ad`)
        .setDescription(`<:icons_Correct:1021125694002049065> Seattle Roleplay

Seattle Roleplay is an immersive and expansive ER:LC Discord Server that pushes itself to be the best it can be. We are welcoming, and inclusive. Seattle Roleplay has active SSUs and an understanding, and competent staff team that is trained to maintain quality roleplay while not interfering with good roleplay or not problematic roleplay. Out of the many ER:LC Servers out there, we try the best we can to make all members feel welcome and understood.

━━━━━━━━━━━━━━━━━━

<:Information:1023271487983079556> ・Why Seattle?

》〔🎮〕Daily SSU's
》〔🎁〕Perks
》〔🚓〕Great Roleplay
》〔<:Gold:1024013896471822356>〕Paid Ads
》〔<:edit:1024013964423737434>〕Strict Rules
》〔<:Robux_1:1021125793662898279>〕Giveaways
》〔🏗️〕Much more!

━━━━━━━━━━━━━━━━━━

👮 ・Departments We Offer:

》〔<:SPD:1024013427624116334>〕Seattle Police Department
》〔<:KCSO:1024013618729205851>〕Seattle Sheriff’s Office
》〔<:SDOT:1024014988937007146>〕Seattle Department of Transportation
》〔<:SFD:1024014203457118238>〕Seattle Fire & Medical Department
》〔<:WCOMS:1024014373762637844>〕Seattle Department of Communications

━━━━━━━━━━━━━━━━━━

<:LINK:1024013284162142328> ・Links:

》〔<:Discord:1021138053802233866>〕Server Invite: https://discord.gg/seattlerp
》〔<:prc:1021126097410211940>〕In Game Server: Join the Discord!
》〔<:Youtube:1024013240608497754>〕Server Trailer: https://youtu.be/AVJJseAQ0Kc

Welcome to Seattle,
- SRP Management Team`)

        message.delete()
        message.channel.send({embeds: [embed] })
    }
    
    if (command === 'training') {
      const embed = new MessageEmbed()
      .setColor(`BLUE`)
      .setTitle(`Staff Training`)  
      .setDescription(`A Staff Training/Ride along is going to be hosted by <@${message.author.id}> in about ${args[0]} minutes. Be sure you are ready and join <#1023757342313029663> and wait to be dragged into a training room by <@${message.author.id}>.`)
      .setTimestamp()
      .setFooter(`Good Luck!`)

      message.delete()
      message.channel.send({content: '<@&1020901698451026001>', embeds: [embed]})
      if (!message.member.roles.cache.find(r => r.id === "1023421686982385754")) return;
    }

    if (command === 'appeal') {
        const embed = new MessageEmbed()
    
        .setColor(`BLUE`)
        .setTitle(`Ban Appeal`)
        .setDescription(`<:ban_icon:1023587175826202755> *You can appeal your __in-game__ ban by clicking* [**Here!**](https://forms.gle/AXNf8xtzFAyrSExu9)`)
    
        message.channel.send({embeds: [embed] })
        message.delete()
        message.guild.channels.cache.get("1021207055727607880").send('Hi')
    }
    
 

    if (command === 'sts') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`A STS has been called out!`)
        .setDescription(`A STS has been called out by <@${message.author.id}>! Please head to our STS Location & follow the :m commands listed in [**Our STS Guide**](https://docs.google.com/document/d/1JlY3yMTqxG009nVZ9R1qYvFxXc8GIbatLYS6E-P0YuM/edit?usp=sharing)`)
    
        message.delete()
        message.channel.send({content: '<@&1021055514181914675>', embeds: [embed]})
        if (!message.member.roles.cache.find(r => r.id === "1021055514181914675")) return;
    }

     if (command === 'purge') {
        message.delete();
        if (!message.member.roles.cache.find(r => r.id === "1011670326268153888")) return;
        const amount = parseInt(args[0]);
        if (!amount) return Discord.Message.channel.send("Please specify the number of messages You want to delete.");
        if (amount > 100 || amount < 1) return message.channel.send("Please select a message **Between** 100 & 1!");
  
        message.channel.bulkDelete(amount).catch((err) => {
          message.channel.send("Due to Discord Limits, I cannot delte messages older thrn 14 days.");
        });
  
        const embed = new MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<a:green:1012613652152590417> | Successfully Purged **${amount}** messages.`)
      
       
        message.channel.send({ embeds: [embed] });
      }

      if (cmd === 'hack') {
        message.channel.send(`I have hacked 533714517633400832! Info sent to your dms!`)
      }

      if (command === 'staff') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Staff Application`)
        .setDescription(`<:staff:1021125972285734933> *The Seattle Roleplay Staff Application can be found* [**Here!**](https://forms.gle/e34fbeLDKne2JZYz6)`)

        message.delete()
        const channel = message.guild.channels.cache.get('1021207055727607880')
        channel.send({embeds: [embed] })
      }

    if (command === 'ssu') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`Server Start Up Server A`)
        .setDescription(`**Server Start Up Server A**
        <:icons_text3:1021202272627195944> **Server Name:** **Seattle Roleplay 2 | VC Optional**
        <:icons_text6:1021201858984935484> **Server Owner:** **N_Nxthan**
        <:icons_text1:1021201821823418400> **Server Code:** **SeattlE**`)
        .setFooter(`Seattle Roleplay`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/1003775876309196870/1021199035970883655/unknown.png`)
        .setImage(`https://cdn.discordapp.com/attachments/1003775876309196870/1021199534333907014/unknown.png`)

        message.channel.send({embeds: [embed]})
        message.delete()
        if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;
    };

    if (command === 'ssuvote') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`<:Seattle:1020896096530215005> Server Start Up Vote!`)
        .setDescription(`*A _Server Start Up Vote_ has just been called out by <@${message.author.id}> React with the <:icons_Correct:1021125694002049065> if you can join!*
        **Ticks Needed: 7+**`)
        .setTimestamp()
        .setFooter(`Seattle Roleplay`)

        message.channel.send({content: '@here / <@&887496609095630892>', embeds: [embed]}).then(msg => {
            msg.react("<:icons_Correct:1021125694002049065>");
            if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;
            message.delete()
        });
    }

    if (command === 'ssd') {
        const embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`🚨Server is shut down🚨`)
        .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

        A Server Shut Down has occurred as of Time Stamp. Keep your eye on this page for the next server start-up. Please do not join in game or you will be moderated.
    
        Thanks,
        Seattle Roleplay Management`)
        .setTimestamp()
        .setFooter('Seattle Roleplay')

        if (!message.member.roles.cache.find(r => r.id === "941142733945466901")) return;

        message.channel.send({embeds: [embed]})
        message.delete()
    }

    if (command === 'purge') {
        message.delete();
        if (!message.member.roles.cache.find(r => r.id === "1011670326268153888")) return;
        const amount = parseInt(args[0]);
        if (!amount) return Discord.Message.channel.send("Please specify the number of messages You want to delete.");
        if (amount > 100 || amount < 1) return message.channel.send("Please select a message **Between** 100 & 1!");

        message.channel.bulkDelete(amount).catch((err) => {
            message.channel.send("Due to Discord Limits, I cannot delte messages older thrn 14 days.");
        });

        const embed = new MessageEmbed()
        .setColor(`RED`)
        .setDescription(`<:icons_Correct:1021125694002049065> | Successfully Purged **${amount}** messages.`)
  
   
        message.channel.send({ embeds: [embed] });
  }
});