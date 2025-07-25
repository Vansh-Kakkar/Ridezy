import React from 'react'
import { RiArrowDownWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine, RiHome5Line } from 'react-icons/ri'
import {Link} from 'react-router'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <RiHome5Line className='text-lg font-medium'/>
        </Link>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map.png" />
        </div>

        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
                                     <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="car.png" />
                                     <div className='text-right'>
                                        <h2 className='text-lg font-medium'>Sarthak</h2>
                                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>UK06 AK 6789</h4>
                                        <p className='text-sm text-gray-600'>Swift</p>
                                     </div>
                                 </div>
            
            
                                 <div className='flex gap-2 justify-between flex-col items-center'>
                                    <div className='w-full mt-5'>
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
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding