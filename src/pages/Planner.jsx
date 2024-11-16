import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Planner() {
    return (
        <section className='w-full flex flex-col items-center'>
            <Navbar />
            <main className='w-full flex items-center justify-center flex-col p-5'>
                <h1 className='text-5xl mb-20 mt-12 text-primary font-bold text-center'>Choisissez votre type de <br /><span className='text-secondary'> voyage</span> 🌍</h1>
                <div className='w-full gap-16 px-2 h-full items-center justify-center flex'>
                    <PlannerDivs image="/solo.png" children={"Solo"}/>
                    <PlannerDivs image="/famille.png" children={"Famille"} />
                    <PlannerDivs image="/luxe.png" children={"Luxe"} />
                    <PlannerDivs image="/culturel.png" children={"Culturel"} />
                </div>
            </main>
        </section>
    )
}

export default Planner

const PlannerDivs = ({ children, image }) => {
    const navigate = useNavigate()
    const navigation = () => navigate(`/planner/${children}`)
    return (
        <div onClick={navigation} className='w-[15%] cursor-pointer h-full flex flex-col p-2 rounded hover:scale-110 hover:shadow transition-all duration-300 ease-in-out'>
            <div className='w-full h-[40vh] flex items-center justify-center'>
                <img src={image} className='w-[300px]' alt="" />
            </div>
            <div className='w-full h-14 rounded-xl bg-secondary/60 text-primary flex items-center justify-center'>
                <h1 className='text-md'>{children}</h1>
            </div>
        </div>
    )
}