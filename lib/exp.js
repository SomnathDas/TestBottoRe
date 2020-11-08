const fs = require('fs-extra')

module.exports = { add }
async function add(addxp, expfile) {
   if (fs.existsSync('./lib/expdata/'+expfile)) {
        var expdata = JSON.parse(fs.readFileSync('./lib/expdata/'+expfile))
        const expf = expdata[0] 
        expdata.splice(0, 1)
        expdata.push(expf+addxp)
        await fs.writeFile('./lib/expdata/'+expfile, JSON.stringify(expdata))
   } else {
        var exparray = [addxp] 
        await fs.writeFile('./lib/expdata/'+expfile, JSON.stringify(exparray))
   }
}
