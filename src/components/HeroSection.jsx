import React from 'react'
import WordPullUp from "@/components/ui/word-pull-up";
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='w-full h-[100vh] flex flex-col lg:w-full lg:h-[89vh] lg:flex lg:items-center lg:flex-row'>
            <div className='w-full h-[30%] flex items-center justify-center order-2 lg:order-1 gap-2 lg:w-[40%] lg:px-14 lg:gap-8 lg:h-full lg:flex lg:items-start lg:justify-center lg:flex-col'>
                <div className='hidden lg:w-full lg:flex lg:leading-[5rem] lg:flex-col lg:items-start'>
                    <Words color='text-primary'>Voyagez</Words>
                    <Words color='text-secondary'>responsable</Words>
                    <Words color='text-primary'>respectez la</Words>
                    <Words color='text-secondary'>planète</Words>
                </div>
                <p className='hidden lg:flex'>Créez des itinéraires écoresponsables, réduisez votre impact et contribuez à un monde plus vert.</p>
                <Link to='/connexion' className='text-white flex items-center justify-center bg-secondary w-28 h-12 rounded-full shadow-xl'>Connexion</Link>
                <Link to='/inscription' className='text-white flex items-center justify-center bg-primary w-28 h-12 rounded-full shadow-xl'>Inscription</Link>
            </div>
            <div className='w-full h-[70%] relative flex items-center justify-center order-1 lg:order-2 lg:w-[60%] lg:h-full lg:flex lg:items-center lg:justify-center'>
                <div className='w-full h-full' style={{ background: 'url("/heroImg.png") no-repeat center center/cover' }}></div>
                <img src="/heroImg.png" className='w-full object-cover hidden lg:flex' alt="" />
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