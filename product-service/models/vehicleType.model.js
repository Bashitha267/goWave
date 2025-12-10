import mongoose from 'mongoose';
const { Schema } = mongoose;

const vehicleSchema = new Schema({
 vehicle_type:{
    type:String,
    required:true,
    unique:true
 },
 
 price_perkm:{
    type:Number,
    required:true
 },
 max_capacity:{
    type:Number,
    required:true
 }
});
const vehicle_type = mongoose.model('Vehicle Type', vehicleSchema);
export default vehicle_type;