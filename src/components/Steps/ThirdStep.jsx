import React from 'react'
import Cards from '../Cards'

function ThirdStep({suivant, retour}) {
    const data = [
        {
            mainText: "Traveling opens your mind and broadens your horizons.",
            recommendation: "Highly Recommended",
        },
        {
            mainText: "Explore the hidden gems of your next destination.",
            recommendation: "Must Visit",
        },
        {
            mainText: "Embrace the adventure and live unforgettable moments.",
            recommendation: "Adventure Awaits",
        },

    ];

    return (
        <div className='w-full flex flex-col items-center justify-center p-5 overflow-y-auto'>
            <h1 className='text-4xl text-primary'>Votre Itinéraire <span className='text-secondary'>Écoresponsable</span> est Prêt ! 🌍</h1>
            <div className='w-full gap-4 flex flex-col p-4'>
                <h1 className='text-2xl text-primary font-bold'>Jour 1</h1>
                <div className='w-full flex items-center gap-8'>
                    {data.map((item, index) => (
                        <Cards key={index} mainText={item.mainText} recomendation={item.recommendation} />

                    ))}
                </div>
            </div>
            <div className='w-full gap-4 flex flex-col p-4'>
                <h1 className='text-2xl text-primary font-bold'>Jour 2</h1>
                <div className='w-full flex items-center gap-8'>
                    {data.map((item, index) => (
                        <Cards key={index} mainText={item.mainText} recomendation={item.recommendation} />

                    ))}
                </div>
            </div>
            <div className='w-full gap-4 flex flex-col p-4'>
                <h1 className='text-2xl text-primary font-bold'>Jour 2</h1>
                <div className='w-full flex items-center gap-8'>
                    {data.map((item, index) => (
                        <Cards key={index} mainText={item.mainText} recomendation={item.recommendation} />
                    ))}
                </div>
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
    )
}

export default ThirdStep