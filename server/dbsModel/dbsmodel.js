const mongoose= require('mongoose');



const todoSchema = mongoose.Schema({
    
    todo: {
        type: String,
        required: true
    },
    dateAndTime: {
        type: String,
        required: true
    },
});

const todo = mongoose.model('todo', todoSchema);
module.exports=todo;