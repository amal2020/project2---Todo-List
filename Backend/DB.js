const mongoose = require('mongoose')
const mongoURI="mongodb://localhost:27017/TodoListV01";

const db = mongoose.connection;

//conncecion to mongoDB
mongoose.connect(mongoURI, 
    {useNewUrlParser: true , useUnifiedTopology: true},
    ()=>{
        console.log('The connection established M ...')
    })

    //extra ERROR/ SUCCESS 
    db.on("error", (err)=>{
        console.log(err.message + ' mongo not running')
    })
    db.on("connection",(err)=> {
        console.log('Mongodb is connected... ')
    })