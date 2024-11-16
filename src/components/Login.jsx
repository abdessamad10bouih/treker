import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FcGoogle } from 'react-icons/fc'
import { Eye, EyeClosed, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

function Login() {
    const [display, setDisplay] = useState(false)

    const switchPass = () => {
        setDisplay(!display)
    }
    return (
        <section className='w-full flex flex-col items-center'>
            <Navbar />
            <main className='w-full flex h-[80vh] relative items-center flex-col justify-center'>
                <img src="/lamp.png" className='absolute w-[200px] top-10 right-28' alt="" />
                <img src="/book.png" className='absolute w-[200px] bottom-0 left-10' alt="" />
                <form className='w-[30%] gap-4 mt-6 px-5 flex flex-col items-center justify-center' action="">
                    <img src="/logo.png" className='w-[60px]' alt="" />
                    <h1>Connexion</h1>
                    <div className='w-full h-12 cursor-pointer border flex items-center justify-center gap-6 border-black rounded-xl'>
                        <h1 className='text-primary'>Crée Un compte avec Google</h1>
                        <FcGoogle size={30} />
                    </div>
                    <div className='w-full border-gray-100 border relative'>
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2'>Ou</h1>
                    </div>
                    <div className='w-full h-20 flex flex-col gap-1 justify-center'>
                        <label htmlFor="email" className='text-gray-400 text-sm'>Adresse Email</label>
                        <input type="email" id='email' className='w-full h-12 border-2 px-3 outline-none text-primary border-primary rounded' placeholder='Entrez votre adresse email' />
                    </div>
                    <div className='w-full h-20 flex flex-col gap-1 justify-center'>
                        <label htmlFor="email" className='text-gray-400 text-sm'>Mot de pass</label>
                        <div className='w-full h-12 border-2 border-primary flex rounded items-center pr-3'>
                            <input type={display ? 'text' : 'password'} id='email' className='w-full h-full outline-none px-3 text-primary rounded' placeholder='Entrez votre mot de pass' />
                            {display ? <Eye onClick={switchPass} size={20} className='text-primary cursor-pointer' /> : <EyeClosed onClick={switchPass} size={20} className='text-primary cursor-pointer' />}
                        </div>
                    </div>
                    <button className='w-full h-12 bg-secondary text-white rounded-full'>Connexion</button>
                </form>
                <h1 className='text-sm mt-4 text-primary'>Vous n'avez pas encore de compte ? <Link to="/inscription" className='text-secondary'>Inscrivez-vous !</Link></h1>
                <div className='w-[30%] h-12 mt-4 flex items-center justify-center gap-4'>
                    <Facebook size={15} className='text-primary'/>
                    <Twitter size={15} className='text-primary'/>
                    <Instagram size={15} className='text-primary'/>
                    <Linkedin size={15} className='text-primary'/>
                </div>
            </main>
        </section>
    )
}

export default Login