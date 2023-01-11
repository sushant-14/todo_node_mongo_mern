const { render } = require('ejs');
const todo_model = require("../model/todo_model.js");

// home page controller
module.exports.home=function(req,res){
  todo_model.find({},function(err,contacts){
    if(err){
        console.log('error in fetching contacts from db');
        return;
    }
    return res.render('home',
    {
        title:"Home page",
        todo_list:contacts,
    })

})
}

// form data send controller
module.exports.create_todo = function(req,res){
  console.log(req.body.msg,".lll.")
  todo_model.create({
      msg : req.body.msg,
      date : req.body.date,
      imp : req.body.imp
  },function(err,todolist){
      if(err){
        console.log('error in creating contact: ',err);
  return;
}
  console.log("***********",todolist);
  return res.redirect('back')
});
}

// delete controller
module.exports.delete_todo=function(req, res){
  console.log(req.query);
  let id = req.query.id
  todo_model.findByIdAndDelete(id,function(err){
      if(err){
          console.log('error in delelting an object from database');
          return;
      }
      return res.redirect('back');
  });
};

// update controller on edit page
module.exports.updateForm = function(req,res){
  console.log(req.query.id);
  todo_model.findById(req.query.id, function(err,todoLists){
      if(err){ console.log('hi man!! it an error'); return}
      return res.render('editPage',{
      title:'Edit Page',
      todolist:todoLists
      });
  });
}

// update controller see on home page
module.exports.updateToDoList = function(req,res){

  todo_model.updateOne({_id:req.query.id},{$set:{
    msg : req.body.msg,
    date : req.body.date,
    imp : req.body.imp
  }} ,function(err,todoData){
      if(err){
          console.log('erroe while updating'); 
          return;
      }
      console.log("Details Updated", todoData);
      return res.redirect('/');
  });  
}


