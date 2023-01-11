const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    msg:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    imp:{
        type:String,
        require:true
    },
});

const todo_model=mongoose.model('todo_model',contactSchema);
module.exports=todo_model;