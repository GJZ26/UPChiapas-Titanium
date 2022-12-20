const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.send("Hola mundo!")
})

app.listen(3030,()=>{
    console.log(`Example app listening on port ${3000}`)
})