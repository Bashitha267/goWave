const express=require('express');
const cors=require('cors');
const connectDB = require('./config/config');
const router = require('./routers/vehicle_type.routers');

const vehicleTypeRoutes = require('./routers/vehicle_type.routers');
require('dotenv').config();


const app=express();
const Port=process.env.PORT||3000;


//middlewares
app.use(cors());
app.use(express.json());

app.listen(Port,()=>{
    console.log(`Product service is running on port ${Port}`);
})
//routes
app.get('/',(req,res)=>{
    res.send(`service is running on ${Port}`)
})

//connect mongodb
connectDB();

//routers
app.use('/vehicle',vehicleTypeRoutes)
