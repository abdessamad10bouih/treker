import React from 'react'

function FifthStep() {
    return (
        <div className='w-full flex flex-col gap-5 h-[100vh] items-center justify-center'>
            <h1 className='text-3xl text-primary font-semibold'>Conseils pour Réduire Votre <span className='text-secondary'>Empreinte Carbone</span> 🚶‍♀️</h1>
            <div className='w-full h-[80%] flex items-center justify-center'>
                <div className='w-[70%] h-[70%] rounded-2xl bg-secondary/60 flex items-center justify-center relative'>
                    <p className='text-primary px-10'>
                        <strong>Optez pour des transports en commun</strong> : Réduisez vos émissions en prenant le train, le bus, ou en partageant une voiture. <br />
                        <strong>Choisissez des hébergements écoresponsables</strong> : Privilégiez les hôtels certifiés verts ou les logements qui utilisent des énergies renouvelables. <br />
                        <strong>Participez à des activités locales durables</strong> : Soutenez les initiatives locales qui favorisent la conservation de la nature et la protection de l'environnement. <br />
                    </p>
                    <img src="/balises.png" className='absolute -top-24 w-[250px]' alt="" />
                </div>
            </div>
            <div className='w-full h-10 flex items-center justify-end px-5'>
                <button className='w-40 h-[90%] bg-secondary text-white rounded-full'>Telecharger</button>
            </div>
        </div>
    )
}

export default FifthStep