const express = require("express")
const cors =require("cors")
const port = 4555
const app =express()
const {postrouter}=require("./seveur/router/postRouter")


app.use(express.json())
app.use(cors())

app.use("/http://localhost:3000/",postrouter)
app.listen(port,(error)=>{
    error?console.log(error) : console.log(`serveur is runing http://localhost:${port}`)
})