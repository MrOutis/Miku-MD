const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['19898080719']
global.OwnerNumber = ['19898080719']
global.ownertag = ['19898080719']
global.BotName = "B⊕T R⊕KETᵒᶠᶜ"
global.packname = "©Ⓥⓘⓖⓖⓞ\n𝑇𝑜𝑑𝑜 𝑙𝑜 𝑞𝑢𝑒 𝑎𝑙𝑔𝑢𝑛𝑎 𝑣𝑒𝑧 𝑑𝑒𝑠𝑒𝑎𝑠𝑡𝑒 𝑒𝑠𝑡𝑎́ 𝑑𝑒𝑙 𝑜𝑡𝑟𝑜 𝑙𝑎𝑑𝑜 𝑑𝑒𝑙 𝑚𝑖𝑒𝑑𝑜:𝐴𝑏𝑖,𝑆𝑜𝑓𝑖́,𝐷𝑎𝑛,𝑅𝑜𝑥,𝑆𝑎𝑙𝑜,𝐼𝑠𝑠𝑎,𝐵𝑎𝑟,𝑆𝑜𝑓𝑖́ 𝐽𝑟,𝐺𝑒𝑟,𝑆𝑟🎩,𝐿𝑒𝑥,𝐾𝑖𝑟𝑖.Ꮩ𝑖̈ɢɢ⊕ᵒᶠᶜ🍷"
global.author = "©Ⓥⓘⓖⓖⓞᵒᶠᶜ"
global.OwnerName = "Viggo Tarasov"
global.BotSourceCode = "https://chat.whatsapp.com/CCaUn821f9kAeykkaJU94j"
global.SupportGroupLink = "https://chat.whatsapp.com/CCaUn821f9kAeykkaJU94j"
global.sessionName = "session"



global.prefa = ['+'] // Prefix ---  change it to anythong you want except @//


global.location = "West Bengal, India"
global.reactmoji = "😎"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://chat.whatsapp.com/CCaUn821f9kAeykkaJU94j"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Chotto Matte...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
