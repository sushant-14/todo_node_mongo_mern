const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const port=8001;
const router=require('./routes/index')
const db=require('./config/mongoose');
const todo_model=require('./model/todo_model')

app.use(bodyParser.urlencoded({extended: false}));

// use express router
// app.use('/',require('./routes'));
app.use('/',router);

// app.use(express.urlencoded());
app.use(express.static('assests'))

// set view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error is this: ${err}`)
        return;
    }
    console.log(`server is running on port ${port}`);
});
