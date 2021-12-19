const express = require('express')
const app = express()
const db = require('./DB')
const Todo = require('./todo')
//console.log(Todo)

app.use(express.json())

app.get('/tasks', (req,res)=>{
    Todo.find({}, (err, data)=>{
        if(err){
            console.log('Error: ',err )
        } else {
            res.json(data)

        }
    })
})


app.post('/tasks', (req,res)=>{
    Todo.create({}, (err, newTask)=>{
        console.log('25:',req.body)
        
        if(err){
            console.log('Error: ',err )
        } else {
            res.status(201).json(newTask)

        }
    })
})


app.listen(5000, ()=>{
    console.log('SERVER ON 5000')
})
