const SauceNAO = require('saucenao')
const fs = require('fs-extra')

module.exports = { sauce }
async function sauce(filename, message) {
try {
console.log(filename)
var source = await SauceNAO(filename)
var txt = source.json.results[0].data
var HQ = source.json.results[0].data.ext_urls[0]
delete txt.ext_urls 
var text = JSON.stringify(txt)
var tt = text.split(',') 
var nxtline = tt.join('\n\n✨️')
var wq = nxtline.replace(/"/g, '')
var wo = wq.replace('{', '')
var woo = wo.replace('}', '')
var wu = woo.replace(/_/g, ' ')
var tu = '✨️'+wu.toUpperCase()
var watext = `♥️ Similarity: ${source.json.results[0].header.similarity}

💚️ URL: ${HQ} 

${tu}`
const url = source.json.results[0].header.thumbnail
await sclient.sendFileFromUrl(message.from, url, 'sauce.jpg', watext, message.id)

} catch(err) {

console.log(err)
await sclient.reply(message.from, 'Counldn\'t find the source of the requested picture', message.id)
}

}

