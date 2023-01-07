const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controler');


console.log("router working")

router.get('/',homeController.home);
router.get('/famous',homeController.famous);
router.get('/funny',homeController.funny);



module.exports=router;