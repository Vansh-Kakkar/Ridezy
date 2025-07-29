import React from 'react'
import { RiMapPinFill } from 'react-icons/ri'

const LOcationSearchPanel = ({setVehiclePanelOpen, setPanelOpen, suggestions, setPickup, setDestination,activeField}) => {
    
    // const locations = [
    //     "Avas Vikas, Kichha, Udham Singh Nagar, Uttarakhand",
    //     "Alliance, Rudrapur, Udham Singh Nagar, Uttarakhand",
    //     "Emerald, Manipal, Udupi, Karnataka",
    //     "Metropolis, Rudrapur, Udham Singh Nagar, Uttarakhand",
    // ]


     const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }



        // setVehiclePanel(true)
        // setPanelOpen(false)
    }
  // return (
    // <div>
    //      {
    //         locations.map((elem) => {
    //           return <div key={elem} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black items-center my-4 justify-start'>
    //                  <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'> <RiMapPinFill/> </h2>
    //                  <h4 className='font-medium'>{elem}</h4>
    //                  </div>
    //         })
    //      }
         
    // </div>
//    <div className="space-y-4">
//   {suggestions.map((elem,idx) => (
//     <div
//       onClick={() => {
//         setVehiclePanelOpen(true)
//         setPanelOpen(false)
//       }}
//       key={idx}
//       className="flex gap-4 border border-gray-200 p-4 rounded-xl bg-white items-start"
//     >
//       {/* Icon Container with fixed size, no stretch */}
//       <div className="shrink-0 flex items-center justify-center rounded-full bg-gray-200" style={{ height: 40, width: 40 }}>
//         <RiMapPinFill className="text-black text-base" />
//       </div>

//       {/* Text with wrapping */}
//       <p className="text-sm font-medium text-black leading-snug">
//         {elem}
//       </p>
//     </div>
//   ))}
// </div>




    
//   )

 return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><RiMapPinFill/></h2>
                        <h4 className='font-medium'>{elem.description}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LOcationSearchPanel