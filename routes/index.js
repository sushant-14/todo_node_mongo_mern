const express=require('express');
const homeController=require('../controllers/home_controler.js');
const router=express.Router();


console.log("router working")

router.get('/', homeController.home);
router.post('/add', homeController.create_todo);
router.get('/delete-contact',homeController.delete_todo);
router.get('/update',homeController.updateForm);
router.post('/edit-todolist', homeController.updateToDoList);


module.exports=router;