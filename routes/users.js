const express=require('express');
const router=express.Router();

const userController=require('../controllers/users_controler');
router.get('/profile',  userController.profile);

// route the about page
router.get('/about',userController.about);

// route the data page
router.get('/data',userController.data);

// export system
module.exports=router;