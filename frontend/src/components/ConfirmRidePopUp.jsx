import React,{useState} from 'react'
import { RiArrowDownWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine } from 'react-icons/ri'
import {Link,useNavigate} from 'react-router'
import axios from 'axios'

const ConfirmRidePopUp = ({setRidePopupPanel,setConfirmRidePopupPanel,ride}) => {
    const [otp,setOtp] = useState('')
    const navigate = useNavigate()
  const submitHandler = async (e) =>{
    e.preventDefault()
     const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            setConfirmRidePopupPanel(false)
            setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: ride } })
        }
  }
  return (
     <div>
             <h5 onClick={()=> setRidePopupPanel(false)} className='p-1 text-center w-[93%] absolute top-0 '> <RiArrowDownWideLine className='text-3xl text-gray-200'/> </h5>
                     <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
                      
                      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                         <div className='flex items-center gap-3'>
                            <img className='h-12 rounded-full object-cover w-12' src="data:image/jpeg;base64,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"  alt="" />
                            <h2 className='text-lg font-medium capitalize'>{ride?.user.fullname.firstname}</h2>
                         </div>
                         <h5 className='text-lg font-semibold'>2.2KM</h5>
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
                        <div className='mt-6 w-full'>
                            <form onSubmit={(e) => submitHandler(e)}>
                                <input value={otp} onChange={(e)=> setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
                                 <button  onClick={()=> {
                            
                                  }} className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
    
                                  <button onClick={()=> {
                                    setConfirmRidePopupPanel(false)
                                    setRidePopupPanel(false)
                                  }} className='w-full mt-2 bg-red-600 text-lg text-white  font-semibold p-3 rounded-lg'>Cancel</button>
                            </form>
                        </div>
                     </div>
     </div>
  )
}

export default ConfirmRidePopUp