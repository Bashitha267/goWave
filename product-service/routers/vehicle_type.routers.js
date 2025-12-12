const express=require('express');
const { add_Vehicle_type, get_vehicle_types } = require('../controllers/vehicle_type_controller');
const router=express.Router();


router.post('/createNewType',add_Vehicle_type)
router.get('/getVehicleTypes',get_vehicle_types)
module.exports=router;