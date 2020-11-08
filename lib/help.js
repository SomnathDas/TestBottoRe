const botname = 'Emilia'
const prefix = '#'
function help( pushname ) {
    return `👋️Hi *${pushname}*, I'm Emilia. 

⭐️ *Command List* ⭐️

*_User Commands_* 👥️

*CMD: #profile* 📝️
*Description: Display's the profile of user in*
*Usage: #profile*

*CMD: #groupinfo* ❤️
*Description: Displays the information of the group*
*Usage: #groupinfo*

*CMD: #info* 📃️ [Bugged]
*Description: Displays the information about the bot*
*Usage: #info*

*_Poll commands_* 🎯️

*CMD: #resetpoll <title>* ✨️
*Description: Created/resets a poll*
*Usage: #resetpoll Zelda?*

*CMD: #add <candidate name>* 💚️
*Description: Adds the given name to the poll*
*Usage: #add Ripper*

*CMD: #poll* 🔮️
*Description: Displays the infromation of the current poll*
*Usage: #poll*

*CMD: #vote <candiate number>* 🔶️
*Description: Votes for the candiadte given*
*Usage: #vote 1*

*_Query commands_* 🏕️

*CMD: #anime <anime name>* ⛩️
*Description: Displays the infromation of the given anime name*
*Usage: #anime black butler*

*CMD: #wallpaper <query>* 🌌️
*Description: Return's a wallpaper with the specified query*
*Usage: #wallpaper Zelda*

*CMD: #sr <subreddit>* 📱️
*Description: Return's a wallpaper with the specified query*
*Usage: #sr animeirl* 

*CMD: #translate <iso code>* 📒️
*Description: Translates the quoted text*
*Usage: [quoted_msg] #translate en*
*Language codes: https://www.loc.gov/standards/iso639-2/php/code_list.php*

*CMD: #covid <country name>* 🌍️
*Description: Return's a wallpaper with the specified query*
*Usage: #covid japan*

*CMD: #lyrics <song name>* 🎶️
*Description: Displays the lyrics of the given song*
*Usage: #lyrics Il vento d'oro*

*CMD: #quotemaker | Quote | author* 🌆️
*Description: Turns your quote into a sharable image*
*Usage: #quotemaker | Courage need not to be remembered for it is never forgotten | Zelda* 

*CMD: #pokemon <pokemon_name>* 🔍️
*Description: Send an image of a random pokemon*
*Usage: #pokemon pikachu*

*_Random commands_* ✨️

*CMD: #rpaper* 🏙️
*Description: Sends a random wallpaper*
*Usage: #rpaper*

*CMD: #animeneko* 🐱️
*Description: sends an image of a cultured neko*
*Usage: #animeneo*

*CMD: #neko* 🐈️
*Description: Sends an image of a random neko*
*Usage: #neko*

*CMD: #doggo* 🐕️
*Description: sends an image of a random pup*
*Usage: #doggo*


*_Sticker Commands_* 🌌️

*CMD: #sticker* 🔖️
*Description: Turns images into stickers*
*Usage: Send an image/gif with #sticker as caption*

*Admin Commands - 1* 👑️
Note:To use these commands, The person in question must be admin

*CMD: #act welcome* 🎉️
*Description: If this is active, the bot will welcome new members to te group*
*Usage: #act welcome* 

*CMD: #ping <text(optional)>* 🗣️
*Description: Tags all members in the group*
*Usage: #ping*

*CMD: #delete* 🔀️
*Description: Deletes the bot's texts*
*Usage: use #delete while taging the bot's texts*

*_Admin Commads - 2_* 🌠️
Note: To execute the following commands the bot and the author needs to be admin

*CMD: #seticon* 💎️
*Description: Sets the quoted image as the group icon* 
*Usage: #seticon*

*CMD: #kick @user* 🏌️
*Description: Kicks the mentioned person from the group* 
*Usage: #kick @+10832023922*

*CMD: #promote @user* ⚖️
*Description: Makes the metioned user admin* 
*Usage: #promote @+10832023922*

*CMD: #demote @user* ⬇️
*Description: Demotes the mentioned user from adminship* 
*Usage: #demote @+10832023922*



We hope you have a great time!`
}
exports.help = help()

function info() {
    return `*

Main Group: https://chat.whatsapp.com/Fi7V7g2q2lNHFq4OWl3eXX

Github Repo: https://github.com/AlenSaito1/Whatsapp-Anime-Bot [Not Maintained]

Thanks for being a user, it would not have been possible without you ❤️

*[ALWAYS FREE!]*`

}
exports.info = info()

function pokegame() {

return `*PokeGame~ ♥️*

A wild pokemon will appear randomly if the game is enabled. That Pokemon will stay there until an another pokemon appears. The name of the wild pokemon will not be displayed

If you can correctly guess the name of the pokemon, you can use #catch pokemon_name to add it to your collection

*_Example: #catch Alakazam_*

*Pokedex 📕*

You can view your Pokemon collection using the following commands

• #pokedex 📖
Using it will display all of the pokemon that you caught in the caught order

• #dex 📋
Using it'll display all the pokemon you caught in alphabetical order

• #pokelog 📝
Using it'll display the last 10 pokemon you caught

*Trade ™️*

You can trade Pokemon with other users by using the following commands

• Create a trade 💱
 
You can create a trade by using *#trade create any_of_your_pokemon pokemon_you_want_*

*_Example: #trade create Venusaur Terrakion_*

• View a trade 💎

*#trade view*

• Cancel a trade 🔖

*#trade cancel*
Only the trade creator can cancel the trade

• Accept a trade ❗

If you have the required pokemon for the created tarde and want to accept it use
*#trade confirm*`

}

exports.pokegame = pokegame()

