const express = require("express")
const app = express()
const PORT = process.env.PORT || 3345
const {log} = require('./middleware/log')

app.use(log)

app.get('/',(req,res)=>{
    res.send("HOME")
    })
app.get('/a',(req,res)=>{
    res.send("HOMEpage a")
    })
app.get('/b',(req,res)=>{
    res.send("HOMEpage b")
    })
app.get('/c',(req,res)=>{
    res.send("HOMEpage c")
    })

app.listen(PORT,()=>{
    console.log(`The server running on port ${PORT} `)
})

