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

exports.get_vehicle_types=async(req,res)=>{
    try{
const vehicle_types=await vehicle_type.find();
    return res.status(200).json({data:vehicle_types})
    }
    catch(err){
        return res.status(400).json({message:err})
    }
    
}
