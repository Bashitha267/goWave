import { List, Plus, UserPlusIcon, } from 'lucide-react';
import React from 'react'
type Iocns={
    "icon":string,
    "name":string,
    "path":string
}
const Iocns=[
    {
        "icon":Plus,
        "name":"Register New Vehicle Type",
        "path":"/admin/addvehicle"
    },
    {
        "icon":UserPlusIcon,
        "name":"Register New User",
        "path":""
    },
    {
         "icon":List,
        "name":"Get Vehcile Types",
        "path":""
    }
];
const page = () => {
  return (
    <div className='bg-yellow-300 flex h-full w-fit flex-1'>
     <div className='grid grid-cols-3 w-8- h-24 p-2 gap-4'>
            {
                Iocns.map((name,index)=>(
                    <div key={index} className='bg-white p-3 border-black border-2 flex flex-col h-32 w-32 items-center text-center gap-4'> 
                    <a href={name.path}>
                    <div><name.icon className='text-lg text-black '></name.icon></div>
                    <div className='text-black texxt-lg '>{name.name}</div>
                    </a>
                    
                    
                    </div>
                ))
            }
     </div>
    </div>
  )
}

export default page
