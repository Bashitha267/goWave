const express=require('express');
const { add_Vehicle_type } = require('../controllers/vehicle_type_controller');
const router=express.Router();


router.post('/createNewType',add_Vehicle_type)
module.exports=router;