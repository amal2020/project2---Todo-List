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




/*
app.post('/Insert', (req,res)=>{
    //User.create({Fname:"Mohammed",Favfood:"pitza"}, 
    User.create({Fname:"Nada",Favfood:"soup"}, 

    (err, newData)=>{
   if(err){
       return handleError(err)
   }
   console.log('DATA', newData);
    })
   //db.push(req.body)

   res.json('SUCCESS CREATE NEW USER')
})

app.get('/all', (req,res)=>{
    User.find({}, (err, users)=>{
        if(err){
            return handleError(err)
        }
        console.log('DATA', users);
    
    })
    //res.json(db)
})






/*
const db_array = [
    {fname:'Amal', Age:'24'}
]






app.put('/newElem', (req,res)=>{
    db.push(req.body)

    res.json(db)
})

app.put('/newage/:index', (req,res)=>{
const id = req.params.index
const nage = req.body.neage
db[id].neage = nage
    res.json(db)
})

app.delete('/lastElem', (req,res)=>{
    db.pop()
res.json(db)    })
*/


