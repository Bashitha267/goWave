const { default: vehicle } = require("../models/vehicle.model");
const { default: vehicle_type } = require("../models/vehicleType.model");

exports.add_Vehicle_type=async (req,res)=>{
    try{
        const new_vehicle=await vehicle_type.create(req.body);
        
        return res.status(200).json({message:"New Vehicle Type Created Successfully"})
        

    }
    catch(err){
        return res.status(400).json({message:err})
    }
}
