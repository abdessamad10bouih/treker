import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='w-full flex flex-col border-t border-gray-200'>
            <div className='w-full h-[85%] flex flex-col lg:flex-row'>
                <div className='w-[50%] p-10 h-full flex flex-col justify-center '>
                    <img src="/logo.png" className='w-[70px] mb-2' alt="" />
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit aliquam</p>
                    <div className='w-full mt-3 h-15 flex items-center gap-4'>
                        <Facebook size={20} className='text-secondary' />
                        <Twitter size={20} className='text-secondary' />
                        <Instagram size={20} className='text-secondary' />
                        <Linkedin size={20} className='text-secondary' />
                        <Youtube size={20} className='text-secondary' />
                    </div>
                </div>
                <div className='w-full lg:w-[50%] h-full flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[50%] gap-5 p-10 h-full flex flex-col justify-center'>
                        <h1 className='text-2xl text-primary font-semibold'>Product</h1>
                        <ul className='w-full flex flex-col gap-3'>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary'>Rechercher</li>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary'>Entreprise</li>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary'>Actualiser</li>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary'>Conditions d'utilisation</li>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary'>Conditions d'utilisation</li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-[50%] gap-5 p-10 h-[75%] flex flex-col justify-center'>
                        <h1 className='text-2xl text-primary font-semibold'>Contacts</h1>
                        <ul className='w-full flex flex-col gap-3'>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary flex items-center gap-3'> <Mail size={20} className='text-primary' /> contact@company.com</li>
                                <li className='text-sm text-primary cursor-pointer hover:text-secondary flex items-center gap-3'> <Phone size={20} className='text-primary' /> (xx) xxxx-xxxx</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 px-14 border-t border-gray-200 flex items-center justify-between'>
                <h1 className='text-primary hidden lg:flex'>Copyright © 2024</h1>
                <h1 className='text-primary text-xs w-full text-center lg:text-start'>Tous droits réservés <span className='text-secondary'>| Conditions générales | Politique de confidentialité</span></h1>
            </div>

        </footer>
    )
}

export default Footer