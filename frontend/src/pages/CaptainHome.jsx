import React,{useState,useEffect,useRef} from 'react'
import { RiArrowDownWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine, RiHome5Line, RiLogoutBoxRLine, RiTimer2Line, RiSpeedUpLine, RiBookletLine } from 'react-icons/ri'
import {Link} from 'react-router'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import gsap from 'gsap'

const CaptainHome = () => {
  const  [ridePopupPanel,setRidePopupPanel] = useState(true)
  const  [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useEffect(() => {
     if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
     }
     else{
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
     }
  },[ridePopupPanel])

  useEffect(() => {
     if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
     }
     else{
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
     }
  },[confirmRidePopupPanel])
  return (
     <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
           <img className='w-16' src="data:image/png;base64,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" alt="logo.png" />
           <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <RiLogoutBoxRLine className='text-lg font-medium'/>
           </Link>
        </div>
        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map.png" />
        </div>

        <div className='h-2/5 p-6'>
          <CaptainDetails/>
        </div>

        <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>

        <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome


// import React from 'react'
// import { RiLogoutBoxRLine, RiTimer2Line, RiSpeedUpLine, RiBookletLine } from 'react-icons/ri'
// import { Link } from 'react-router'

// const CaptainHome = () => {
//   return (
//     <div className='h-screen bg-gray-100'>
//       {/* Top Navbar */}
//       <div className='fixed top-0 w-full p-3 flex justify-between items-center z-10'>
//         <img className='w-16' src="data:image/png;base64,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" alt='logo' />
//         <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full shadow'>
//           <RiLogoutBoxRLine className='text-lg font-medium' />
//         </Link>
//       </div>

//       {/* Map Section */}
//       <div className='relative h-1/2 mt-14'>
//         <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />

//         {/* Arrival Info */}
//         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm font-medium px-4 py-1 rounded-full shadow'>
//           Arrival 7 min
//         </div>

//         {/* Car Icon (bottom-left position) */}
//         <div className='absolute bottom-4 left-8'>
//           <img src='your_car_icon_src_here' alt='car' className='h-6 w-12' />
//         </div>
//       </div>

//       {/* Floating Info Card */}
//       <div className='bg-white mx-4 mt-[-20px] p-4 rounded-xl shadow-md z-20 relative'>
//         {/* User Info */}
//         <div className='flex items-center justify-between mb-3'>
//           <div className='flex items-center gap-3'>
//             <img className='h-10 w-10 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="user" />
//             <h4 className='text-base font-semibold'>Harsh Patel</h4>
//           </div>
//           <div className='text-right'>
//             <h4 className='text-lg font-semibold'>₹295.20</h4>
//             <p className='text-sm text-gray-500'>Earned</p>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className='flex justify-around text-center'>
//           <div>
//             <RiTimer2Line className='text-xl mb-1' />
//             <h5 className='font-medium'>10.2</h5>
//             <p className='text-xs text-gray-500'>Hours Online</p>
//           </div>
//           <div>
//             <RiSpeedUpLine className='text-xl mb-1' />
//             <h5 className='font-medium'>10.2</h5>
//             <p className='text-xs text-gray-500'>Hours Online</p>
//           </div>
//           <div>
//             <RiBookletLine className='text-xl mb-1' />
//             <h5 className='font-medium'>10.2</h5>
//             <p className='text-xs text-gray-500'>Hours Online</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CaptainHome
