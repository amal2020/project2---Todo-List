const {Schema, model} = require('mongoose')


//schema اسكيما 

const todoSchema = new Schema({
    Title:String,
    isCompleted:Boolean
})


//Model
const Todo = model('Todo',todoSchema)

module.exports = Todo
