import React, { useEffect, useState } from 'react'

function SecondStep({formData, suivant, retour}) {
    
  return (
    <div className='w-full gap-4 h-full flex'>
        <div className='w-10 h-full'>
            <img src="/logo.png" alt="" />
        </div>
        <div className='w-[90%] gap-4 p-4 h-full flex flex-col'>
            <Headers main={"Date:"} children={formData.date} />
            <Headers main={"location:"} children={formData.location} />
            <Headers main={"Destination:"} children={formData.nextDestination} />
            <Headers main={"Adultes:"} children={formData.numAdults} />
            <Headers main={"Enfants:"} children={formData.numChildren} />
            <Headers main={"Budget:"} children={formData.budget} />
            <Headers main={"Remarks:"} children={formData.remarks} />
            <div className='ai w-full h-[80vh] border-2 border-primary rounded-xl overflow-y-auto'>
                    {/* todo: use ai integration in here */}
            </div>
            <div className='w-full h-16 flex items-center justify-center gap-5'>
                <button onClick={retour} className='w-1/3 h-10 font-semibold rounded-full bg-secondary bg-opacity-40 text-white'>
                    Modifier
                </button>
                <button onClick={suivant} className='w-1/3 h-10 font-semibold rounded-full bg-secondary text-white'>
                    Suivant
                </button>
            </div>
        </div>
    </div>
  )
}

export default SecondStep


const Headers = ({children, main}) => {
    return (
        <h1 className='text-primary'> <span className='font-bold'>{main}</span> {children}</h1>
    )
}