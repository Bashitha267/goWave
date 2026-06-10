"use client";
import axios from 'axios';
import React, { useState } from 'react'
type VehicleType={
  "vehicle_type":string,
  "price_perkm":number,
  "max_capacity":number,
  "icon":string
}

const page = () => {
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setVehicle((prev)=>({
      ...prev,
      [name]: name === 'price_perkm' || name === 'max_capacity' ? Number(value) : value
    }));
  }
  const  addVehicle= async(e:React.FormEvent)=>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      e.preventDefault();
      setLoading(true);
      setMessage("");
      try{
        const response=await axios.post(`${baseUrl}/vehicle/createNewType`,vehicle,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        if(response.status===200){
          setMessage('Vehicle Type Added Success');
          setVehicle({vehicle_type: '', price_perkm:0, max_capacity:0,icon:''})
        }
      }
      catch(error:any){
        console.log(error);
        setMessage(error)
      }
      finally{
        setLoading(false)
      }

     
  }
  
  
  
  
  const [vehicle,setVehicle]=useState<VehicleType>({
    vehicle_type: '',
    price_perkm: 0,
    max_capacity: 0,
    icon: ''
  });
  const [loading,setLoading]=useState(false);
  const [message,setMessage]=useState("");
  return (
    <form onSubmit={addVehicle} className='flex-1 flex-wrap bg-gray-300 h-full w-full'>
       <div className='flex flex-col text-black'>
         <div className='flex p-3 flex-col '>
          <label>
            Vehicle Type:
          </label>
          <input type='text' name='vehicle_type' className='ring-1  rounded-2xl p-2 mt-1 ring-gray-500 border-gray-400' placeholder='Enter vehicle type' value={vehicle?.vehicle_type} onChange={handleChange}></input>
         </div>
         <div className='flex flex-col p-3 gap-2'>
          <label>
            Price Per km:
          </label>
          <input type='text' name='price_perkm' className='ring-1  rounded-2xl p-2 mt-1 ring-gray-500 border-gray-400' onChange={handleChange} value={vehicle?.price_perkm}></input>
         </div>
         <div className='flex  p-3 flex-col' >
          <label>
            Max seating capacity:
          </label>
          <input type='text' className='ring-1  rounded-2xl p-2 mt-1 ring-gray-500 border-gray-400' onChange={handleChange} name='max_capacity' value={vehicle?.max_capacity}></input>
         </div>
         <div className='flex  p-3 flex-col'>
          <label>
            Icon:
          </label>
          <input type='text' onChange={handleChange} name='icon' className='ring-1  rounded-2xl p-2 mt-1 ring-gray-500 border-gray-400'  value={vehicle?.icon}></input>
         </div>
         <button type='submit' className='bg-yellow-500 text-white  w-34 rounded-4xl items-center text-center p-3 text-xl'>{loading ? 'adding':'Add new'}</button>
         {message.length>1 && 
         <div className='mt-3 bg-orange-500 text-white p-3 rounded-3xl text-lg'>{message}</div>
         
         }
    </div>
    </form>
   
  )
}

export default page
