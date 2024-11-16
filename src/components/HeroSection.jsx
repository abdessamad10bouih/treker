import React from 'react'
import WordPullUp from "@/components/ui/word-pull-up";

function HeroSection() {
    return (
        <div className='w-full h-[89vh] flex items-center '>
            <div className='w-[40%] px-14 gap-8 h-full flex items-start justify-center flex-col'>
                <div className='w-full flex leading-[5rem] flex-col items-start'>
                    <Words color='text-primary'>Voyagez</Words>
                    <Words color='text-secondary'>responsable</Words>
                    <Words color='text-primary'>respectez la</Words>
                    <Words color='text-secondary'>planète</Words>
                </div>
                <p>Créez des itinéraires écoresponsables, réduisez votre impact et contribuez à un monde plus vert.</p>
                <button className='text-white bg-secondary w-28 h-12 rounded-full shadow-xl'>Connexion</button>
            </div>
            <div className='w-[60%] h-full flex items-center justify-center'>
                <img src="/heroImg.png" className='w-full' alt="" />
            </div>
        </div>
    )
}

export default HeroSection


const Words = ({ children, color }) => {
    return (
        <WordPullUp
            className={`text-[5rem] ${color}`}
            words={children}
        />
    )
}