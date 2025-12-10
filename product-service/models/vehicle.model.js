import mongoose from 'mongoose';
const { Schema } = mongoose;

const vehicleSchema = new Schema({
 vehicle_type:{
    type:String,
    required:true
 },
 plate_number:{
    type:String,
    required:true,
    unique:true

 },
 driver_id:{
    type:Number,
    required:true,

 },
 manufactor_date:{
    type:Date
 },
 registered_date:{
    type:Date,
    default:Date.now()
 },
 isActive:{
    type:Boolean,
    default:true
 }
 
});
const vehicle = mongoose.model('vehicles', vehicleSchema);
export default vehicle;