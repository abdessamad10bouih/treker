import { Check } from 'lucide-react'
import React from 'react'

function Tarifs() {
  return (
    <div className='w-full flex justify-center p-10 items-center'>
      <div className='w-full h-[90vh] flex flex-col p-5 justify-center items-center bg-gray-50'>
        <h1 className='text-5xl text-primary font-bold'>Nos Tarifs</h1>
        <div className='w-full h-full flex p-5 justify-center items-center gap-3'>
          <div className='w-[30%] rounded-xl flex flex-col gap-2 p-5 h-[55vh] bg-white'>
            <h1 className='text-primary text-2xl font-semibold'>Plan Gratuite</h1>
            <p className='text-primary font-semibold text-xl'>$0</p>
            <p className='text-sm text-gray-600 w-[90%] h-16 border-b'>Testez notre plateforme avec un <br /> itinéraire gratuit et  un accès limité.</p>
            <div className='w-full h-[20vh] gap-5 flex flex-col'>
              <Checks>1 itinéraire gratuit</Checks>
              <Checks>Accès limité aux fonctionnalités</Checks>
              <Checks>1 jeton inclus</Checks>
            </div>
            <button className='w-full h-14 font-semibold rounded-full border-2 border-secondary bg-white text-secondary'>
              Essayez gratuitement
            </button>
          </div>
          <div className='w-[30%] rounded-xl gap-4 flex flex-col p-5 h-[70vh] shadow-xl bg-white'>
            <div className='w-full h-16 gap-2 flex flex-col justify-center '>
              <h1 className='text-primary text-2xl font-semibold'>Plan Explorer</h1>
              <p className='text-primary font-semibold text-xl'>$5</p>
            </div>
            <p className='text-sm text-gray-600 w-[90%] h-20 border-b'>Optimisez vos voyages avec 5 itinéraires personnalisés et des fonctionnalités complètes.</p>
            <div className='w-full h-[20vh] gap-6 flex flex-col'>
              <Checks>1 itinéraire gratuit</Checks>
              <Checks>Fonctionnalités complètes : calcul de <br /> l'empreinte carbone, suggestions durables, <br /> et plus encore</Checks>
              <Checks>1 jeton inclus</Checks>
            </div>
            <div className='w-full h-32 flex items-end justify-center'>
              <button className='w-full h-14 font-semibold rounded-full bg-secondary text-white'>
                S'abonner maintenant
              </button>
            </div>
          </div>
          <div className='w-[30%] rounded-xl flex flex-col gap-2 p-5 h-[55vh] bg-white'>
            <h1 className='text-primary text-2xl font-semibold'>Plan Aventure</h1>
            <p className='text-primary font-semibold text-xl'>$20</p>
            <p className='text-sm text-gray-600 w-[90%] h-20 border-b'>Accédez à des itinéraires illimités et <br /> à toutes les fonctionnalités premium, <br /> pour un voyage durable à long terme.</p>
            <div className='w-full h-[20vh] gap-5 flex flex-col'>
              <Checks>Itinéraires illimités</Checks>
              <Checks>Accès à vie à toutes les fonctionnalités premium</Checks>
              <Checks>Jetons illimités</Checks>
            </div>
            <button className='w-full h-14 font-semibold rounded-full border-2 border-secondary bg-white text-secondary'>
              Contacter les ventes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarifs

const Checks = ({ children, className }) => {
  return (
    <div className={`w-full flex text-sm text-gray-600 ${className}`}> <div className='w-6 h-6 rounded-full bg-gray-300 bg-opacity-40 flex items-center justify-center mr-5'> <Check size={16} className='text-secondary' /> </div> {children}</div>
  )
}