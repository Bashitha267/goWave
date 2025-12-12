"use client";
import axios from "axios";
import { Bell, LocateFixedIcon, MapPin, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
type vehicle=[
  {
    "vehicle_type": string,
  "price_perkm": number,
  "max_capacity": number
}
]
export default function Home() {
  const [openride,setOpenride]=useState(false);
  const [vehicleTypes,setVehicleTypes]=useState<vehicle[]>([]);

  useEffect(()=>{
    const fetchVehicleTypes=async()=>{
      try{
        const types=await axios.get("http://localhost:4000/vehicle/getVehicleTypes");
         setVehicleTypes(types.data);
        console.log(types.data)
      }
      catch(err){
        console.log("Error fetching vehicle types:",err);
      }
    }
    fetchVehicleTypes()
  },[])
  console.log(openride)
  return (
    <div className="bg-gradient-to-r from-yellow-400  to-yellow-200 h-full w-full flex-1 ">
      <div className="flex flex-col justify-between  h-full ">
        <div className="flex flex-row justify-between px-8 mx-4 mt-5">
       <div className="bg-white rounded-full p-2 "><User className=" text-black" size={30} fill="black"></User></div>
    <div className="bg-white rounded-full p-2 "><Bell className=" text-black" size={30} fill="black"></Bell></div>
    </div>

 
      <div className=" rounded-t-4xl mt-3 p-2  bg-gray-200 h-4/5 ">
        <div className="mx-3  p-1 flex-col flex pt-4">
          <div className="text-3xl text-black mx-4  font-bold ">Good Morning !</div>
          {openride===false &&
          <div className="flex flex-row justify-between bg-gray">
              <div className="flex flex-row gap-4 items-center  bg-white p-3 rounded-3xl mt-4 w-full mx-4">
                 <div className=""><Search size={28} color="black"></Search></div>
                 <div className="" onClick={()=>setOpenride(true)}><input placeholder="Where to?" type="text" className="placeholder-gray-500 focus:outline-none text-black"></input></div>
              </div>
           
          
            </div>}
            
            <div className="mx-4 mt-3">
              {openride && <div className="text-black flex flex-col">
                <div className="flex flex-row gap-4 items-center  bg-white p-3 rounded-3xl mt-4 w-full ">
                 <div className=""><LocateFixedIcon size={28} color="black"></LocateFixedIcon></div>
                 <div className="" onClick={()=>setOpenride(true)}><input placeholder="From?" type="text" className="placeholder-gray-500 focus:outline-none text-black" ></input></div>
              </div>
                <div className="flex flex-row gap-4 items-center  bg-white p-3 rounded-3xl mt-4 w-full ">
                 <div className=""><MapPin size={28} color="orange"></MapPin></div>
                 <div className="" onClick={()=>setOpenride(true)}><input placeholder="Where to?" type="text" className="placeholder-gray-500 focus:outline-none text-black"></input></div>
              </div>
              <div className="h-36 w-full bg-blue-300 mt-4 ">map</div>
              <div className="mt-4 p-3 uppercase text-lg text-bold text-gray-600 ">choose a ride</div>
             {vehicleTypes.length>0 && vehicleTypes.map((type,index)=>(
              <div className="" key={index}>
                
              </div>
             ))}
              </div>}

            </div>
          </div>

        </div>
        
      </div>

    
   
      </div>
    
   
  );
}
