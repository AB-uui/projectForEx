const fs = require("fs")
const uuid = require("uuid")
const {format} = require("date-fns")
const path = require("path")

const log = (req,res,next)=>{
 const time = format(new Date(),"dd/mm/yyyy HH:mm:ss")
 const uid = uuid.v4()
 const m = req.method
 const h = req.headers.origin
 const p = req.path
 fs.appendFile(path.join(__dirname,'filereq.txt'),`\n${time} ${uid} ${m} ${h} ${p}`, (err)=>{
if(err) throw err;
console.log("AppendFile File Complete")
})
next()
}


module.exports = {log}