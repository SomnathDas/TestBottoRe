const axios = require('axios')
var i = 0;
module.exports = { memez }

async function memez(meme, message) {

while (i < 30) {

		const memezz = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
		await sclient.sendFileFromUrl(message.from, memezz.data.url,'memezz.jpg', memezz.data.title+'\n\n[Zelda Forever ♥️]')
		await Sleep(125000)
		i++

}

}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
