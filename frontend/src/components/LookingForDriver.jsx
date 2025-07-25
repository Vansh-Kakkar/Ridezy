import React from 'react'
import { RiArrowDownWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine } from 'react-icons/ri'

const LookingForDriver = ({setVehicleFound}) => {
  return (
     <div>
             <h5 onClick={() => setVehicleFound(false)} className='p-1 text-center w-[93%] absolute top-0 '> <RiArrowDownWideLine className='text-3xl text-gray-200'/> </h5>
             <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
             <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="car.png" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                       <RiMapPin2Fill className='text-lg'/>
                       <div>
                        <h3 className='text-lg font-medium'>562/11-R</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Civil lines,Rudrapur</p>
                       </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                       <RiMapPin2Fill className='text-lg'/>
                       <div>
                        <h3 className='text-lg font-medium'>562/11-R</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Civil lines,Rudrapur</p>
                       </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                       <RiCurrencyLine />
                       <div>
                        <h3 className='text-lg font-medium'> ₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                       </div>
                    </div>
                </div>
                
             </div>
        </div>
  )
}

export default LookingForDriver