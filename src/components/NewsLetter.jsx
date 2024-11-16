import { Send } from 'lucide-react'
import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
        <div className='w-[90%] rounded-xl gap-2 bg-secondary h-[80%] flex items-center flex-col justify-center relative'>
            <img src="/planes.png" className='absolute top-0 left-0 ' alt="" />
            <h1 className='text-5xl text-primary font-bold z-10'>Inscrivez-vous à notre newsletter</h1>
            <p className='w-[600px] text-center z-10'>Inscrivez-vous à notre newsletter pour des conseils de voyage écoresponsable et des recommandations durables. Contribuez à un monde plus vert !</p>
            <div className='w-[500px] rounded-xl items-center justify-center h-14 z-10 flex bg-white'>
                <input type="text" placeholder='Entrez Votre adresse email' className='w-full h-full rounded-l-xl pl-5 outline-none text-primary' />
                <div className='w-24 h-full flex items-center justify-center'>
                    <div className='w-[60%] cursor-pointer rounded-xl shadow-xl flex items-center justify-center h-[80%] bg-secondary transition-all duration-150 ease-in-out hover:scale-105'>
                        <Send className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter