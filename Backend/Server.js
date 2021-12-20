const express = require('express')
const { status } = require('express/lib/response')
const app = express()
const db = require('./DB')
const Todo = require('./todo')
//console.log(Todo)

app.use(express.json())
app.listen(5000, ()=>{
    console.log('SERVER ON 5000')
})


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
    console.log('25:',req.body)

    Todo.create({}, (err, newTask)=>{
        
        if(err){
            console.log('Error: ',err )
        } else {
            res.status(201).json(newTask)

        }
    })
})




app.delete('/tasks/:id', (req,res)=>{
    console.log('37:',req.params.id)

    Todo.deleteOne({id: req.params.id }, (err, deleteObj)=>{
        
        if(err){
            console.log('Error: ',err )
        } else {
            deleteObj.deletedCount ===1
            console.log(deleteObj)
            ? res.json('Delete this Task Successfully ')
            : res.status(404).json('This todo is not found')
        }
    })
})

app.put('/tasks/:id', (req,res)=>{
    //console.log('37:',req.params.id)

    Todo.updateOne(
        {_id: req.params.id }, 
        {title:req.body.newTitle},
        (err, updateObj)=>{
        
        if(err){
            console.log('Error: ',err )
            res.status(500).json(err)
        } else {
            console.log(updateObj)

           // updateObj.modifiedCount === 1
           //? res.json('update  this Task Successfully ')
            //: res.status(404).json('This todo is not found')
        }
    })
})

