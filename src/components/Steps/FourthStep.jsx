import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

const data = {
    datasets: [
        {
            label: 'Votes',
            data: [12, 8, 3],
            backgroundColor: [
                'rgb(12, 45, 87)',
                'rgb(255, 61, 0)',
                'rgb(252, 103, 54)',

            ],
        },
    ],
};
const data2 = {
    datasets: [
        {
            label: 'Votes',
            data: [16, 4, 10],
            backgroundColor: [
                'rgb(12, 45, 87)',
                'rgb(255, 61, 0)',
                'rgb(252, 103, 54)',

            ],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            enabled: false,
        },
    },
};

function FourthStep({ form, suivant, retour }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full h-[40vh] flex'>
                <div className='w-full relative h-[30vh] border-primary flex'>
                    <div className='flex w-[70%] h-full items-center justify-center'>
                        <Doughnut borderJoinStyle='rounded' style={{ width: '100px' }} data={data} options={options} />
                    </div>
                    <div className='w-[30%] h-full flex flex-col justify-center'>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-primary'></div>
                            <h1 className='text-primary'>Agence</h1>
                        </div>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-secondary'></div>
                            <h1 className='text-primary'>Billets</h1>
                        </div>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-third'></div>
                            <h1 className='text-primary'>Autre</h1>
                        </div>
                    </div>
                    <h1 className='absolute left-[155px] top-[90px] text-center'>budget <br /> {form.budget}£</h1>
                </div>
                <div className='w-full h-[30vh] relative flex'>
                    <div className='flex w-[70%]  h-full items-center justify-center'>
                        <Doughnut style={{ width: '100px' }} data={data2} options={options} />
                    </div>
                    <div className='w-[30%] h-full flex flex-col justify-center'>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-primary'></div>
                            <h1 className='text-primary'>Transport</h1>
                        </div>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-secondary'></div>
                            <h1 className='text-primary'>Hébergement</h1>
                        </div>
                        <div className='w-full h-10 flex items-center gap-4'>
                            <div className='w-5 h-5 rounded shadow-lg bg-third'></div>
                            <h1 className='text-primary'>Activités</h1>
                        </div>
                    </div>
                    <h1 className='absolute left-[155px] top-[90px] text-center'>budget <br /> {form.budget}£</h1>
                </div>
            </div>
            <div className='w-full gap-12 flex flex-col'>
                <h1 className='text-primary text-3xl'>
                    Résumé <span className='text-secondary'>Budget</span> & <span className='text-secondary'>Activités</span>
                </h1>
                <p className='text-primary'>
                    Total prévu: {form.budget} € <br />
                    Option PDF: Téléchargez cet itinéraire détaillé et conservez vos remarques et recommandations pour une aventure durable complète !
                </p>
                <h1 className='text-primary text-3xl'>À retenir pour <span className='text-secondary'>réduire</span> votre impact carbone 💡</h1>
                <p className='text-primary'>
                    Voyagez en groupe pour maximiser les ressources. <br />
                    Sélectionnez des restaurants et activités locales pour soutenir les communautés. <br />
                    Calculez votre empreinte carbone et ajustez les activités au besoin.
                </p>
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

export default FourthStep