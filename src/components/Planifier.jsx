import React from 'react'
import NumberTicker from "@/components/ui/number-ticker";

function Planifier() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[50%] h-full flex'>
                <img src="/planifier.png" className='w-full bg-cover' alt="" />
            </div>
            <div className='w-[40%] gap-5 h-full p-7 flex flex-col items-center justify-start'>
                <h1 className='text-4xl w-full text-primary font-semibold'>
                    Planifiez des <br /> voyages écolos <br /> facilement
                </h1>
                <p className='text-primary font-light'>
                    Notre planificateur écoresponsable vous aide à créer des itinéraires personnalisés, à suivre votre empreinte carbone et à découvrir des activités locales durables, avec un support à chaque étape.
                </p>
                <div className='w-full gap-3 flex flex-col'>
                    <div className='w-full flex items-center gap-10 justify-center'>
                        <div className='w-[400px] h-[200px] gap-2 border rounded-xl flex items-center justify-center flex-col'>
                            <h1 className='text-6xl text-secondary font-semibold'>
                                <NumberTicker className="text-secondary" value={80} />%
                            </h1>
                            <h4 className='text-primary'>Impact réduit</h4>
                        </div>
                        <div className='w-[400px] h-[200px] gap-2 border rounded-xl flex items-center justify-center flex-col'>
                            <h1 className='text-6xl text-secondary font-semibold'>
                                <NumberTicker className="text-secondary" value={5} />min
                            </h1>
                            <h4 className='text-primary'>Création rapide</h4>
                        </div>
                    </div>
                    <div className='w-full flex items-center gap-10 justify-center'>

                        <div className='w-[400px] h-[200px] gap-2 border rounded-xl flex items-center justify-center flex-col'>
                            <h1 className='text-6xl text-secondary font-semibold'>
                                <NumberTicker className="text-secondary" value={30} />+
                            </h1>
                            <h4 className='text-primary'>Destinations vertes</h4>
                        </div>
                        <div className='w-[400px] h-[200px] gap-2 border rounded-xl flex items-center justify-center flex-col'>
                            <h1 className='text-6xl text-secondary font-semibold'>
                                <NumberTicker className="text-secondary" value={100} />%
                            </h1>
                            <h4 className='text-primary'>Tourisme durable</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planifier