import React from 'react'
import { RiArrowDownWideLine, RiUser3Fill } from 'react-icons/ri'

const VehiclePanel = ({setVehiclePanelOpen, setConfirmRidePanel}) => {
  return (
    <div>
        <h5 onClick={() => setVehiclePanelOpen(false)} className='p-1 text-center w-[93%] absolute top-0 '> <RiArrowDownWideLine className='text-3xl text-gray-200'/> </h5>
             <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
             {/* <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                  <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="car.png" />
                  <div className=' ml-2 w-1/2'>
                      <h4 className='font-medium text-base'>Car <span><RiUser3Fill/>4</span> </h4>
                      <h5 className='font-medium text-sm'>2 mins away</h5>
                      <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                  </div>  
                  <h2 className='text-xl font-semibold'>₹193.20</h2>   
             </div>  */}

             <div onClick={() => setConfirmRidePanel(true)} className='flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-300 active:border-gray-950 shadow-sm bg-white'>
                  <img
                    className='h-12 w-12 object-contain'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
                    alt="car.png"
                  />

                  <div className='flex flex-col justify-center ml-3 flex-grow'>
                    <h4 className='font-semibold text-sm flex items-center gap-1'>
                      Car <RiUser3Fill className='inline text-base' /> 4
                    </h4>
                    <h5 className='text-sm text-gray-700'>2 mins away</h5>
                    <p className='text-xs text-gray-500 leading-tight'>
                      Affordable, compact rides
                    </p>
                  </div>

                  <h2 className='text-lg font-bold text-gray-900 whitespace-nowrap ml-2'>
                    ₹193.20
                  </h2>
              </div>

              <div onClick={() => setConfirmRidePanel(true)} className='flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-300 active:border-gray-950 shadow-sm bg-white'>
                  <img
                    className='h-12 w-12 object-contain'
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
                    alt="bike.png"
                  />

                  <div className='flex flex-col justify-center ml-3 flex-grow'>
                    <h4 className='font-semibold text-sm flex items-center gap-1'>
                      Moto <RiUser3Fill className='inline text-base' /> 1
                    </h4>
                    <h5 className='text-sm text-gray-700'>3 mins away</h5>
                    <p className='text-xs text-gray-500 leading-tight'>
                      Affordable motorcycle rides
                    </p>
                  </div>

                  <h2 className='text-lg font-bold text-gray-900 whitespace-nowrap ml-2'>
                    ₹65
                  </h2>
              </div>

               <div onClick={() => setConfirmRidePanel(true)} className='flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-300 active:border-gray-950 shadow-sm bg-white'>
                  <img
                    className='h-12 w-12 object-contain'
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt="auto.png"
                  />

                  <div className='flex flex-col justify-center ml-3 flex-grow'>
                    <h4 className='font-semibold text-sm flex items-center gap-1'>
                      Auto <RiUser3Fill className='inline text-base' /> 3
                    </h4>
                    <h5 className='text-sm text-gray-700'>3 mins away</h5>
                    <p className='text-xs text-gray-500 leading-tight'>
                      Affordable Auto rides
                    </p>
                  </div>

                  <h2 className='text-lg font-bold text-gray-900 whitespace-nowrap ml-2'>
                    ₹118.21
                  </h2>
              </div>
    </div>
  )
}

export default VehiclePanel