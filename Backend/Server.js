const express = require('express')
const app = express()
const db = require('./DB')
const Todo = require('./todo')
//console.log(Todo)

app.use(express.json())

app.get('/', (req,res)=>{
    res.json('GET/ server is working ....')
})



app.listen(5000, ()=>{
    console.log('SERVER ON 5000')
})