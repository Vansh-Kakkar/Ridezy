import React from 'react'
import { RiArrowDownWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine } from 'react-icons/ri'


const WaitingForDriver = ({setWaiting,ride}) => {
  return (
    <div>
         <h5 onClick={() => setWaiting(false)} className='p-1 text-center w-[93%] absolute top-0 '> <RiArrowDownWideLine className='text-3xl text-gray-200'/> </h5>
                     <div className='flex items-center justify-between'>
                         <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="car.png" />
                         <div className='text-right'>
                            <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                            <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                            <p className='text-sm text-gray-600'>Swift</p>
                           <h1 className='text-lg font-semibold'>  {ride?.otp} </h1>
                         </div>
                     </div>


                     <div className='flex gap-2 justify-between flex-col items-center'>
                        <div className='w-full mt-5'>
                            <div className='flex items-center gap-5 p-3 border-b-2'>
                               <RiMapPin2Fill className='text-lg'/>
                               <div>
                                <h3 className='text-lg font-medium'>562/11-R</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.pickup}</p>
                               </div>
                            </div>
                            <div className='flex items-center gap-5 p-3 border-b-2'>
                               <RiMapPin2Fill className='text-lg'/>
                               <div>
                                <h3 className='text-lg font-medium'>562/11-R</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                               </div>
                            </div>
                            <div className='flex items-center gap-5 p-3'>
                               <RiCurrencyLine />
                               <div>
                                <h3 className='text-lg font-medium'> ₹{ride?.fare}</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                               </div>
                            </div>
                        </div>
                        
                     </div>
    </div>
  )
}

export default WaitingForDriver