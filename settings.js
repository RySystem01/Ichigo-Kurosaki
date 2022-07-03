/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6285888730976']
global.ownerName = 'Rayy'
global.packname = 'RySys-Md'
global.author = 'Rayy'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'lu bukan admin bang/mbak',
botAdmin: 'jadiin botnya admin dulu bang/mbak',
botOwner: 'cuman bisa dipake sama owner bang/mbak',
group: 'cuman bisa dipake digrup bang/mbak',
private: 'cuman bisa dipake di chat private bang/mbak',
wait: 'sabar....',
done: 'udah nih'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
