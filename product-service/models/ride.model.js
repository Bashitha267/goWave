import mongoose from 'mongoose';
const { Schema } = mongoose;

const rideShema = new Schema({
  riderId:{
    type:String,
    required:true
  },
  driverID:{
       type:String,
    
  },
  vehicle_id:{
       type:String,
   
  },
  pickup_location:[{
   latitude:{type:String,required:true},
   longide:{type:String,required:true},

    
}],
 drop_location:[{
   latitude:{type:String,required:true},
   longide:{type:String,required:true},

    
}],
  payment:{
    type:Number,
    required:true
  },
  status:{
    type:String,
    enum:['requested','accepted','ongoing','completed','canceled'],
    default:'requested'
  },
  created_at:{
    type:Date
  },
  accepted_at:{
    type:Date
  },
  started_at:{
    type:Date
  },
  completed_at:{
    type:Date
  },
  cancled_at:{
    type:Date
  },
  payment_status:{
    type:String,
    enum:['paid','pending'],
    default:'pending'

  }
  
});
const ride = mongoose.model('Ride', rideShema);
export default ride;
