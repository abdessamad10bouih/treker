import { FileCheck, Home } from 'lucide-react'
import React, { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { TbCategory, TbCategory2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const HandleMenuOpen = () => setOpen(!open)

  return (
    <nav className='w-full h-16 flex items-center justify-between px-5 lg:w-[80%] lg:h-20 lg:flex lg:items-center'>
      <div className='w-[33%] flex items-center h-full'>
        <Link to='/'><img src="/logo.png" className='w-[60px]' alt="logo" /></Link>
      </div>
      <ul className='hidden lg:w-[33%] lg:flex lg:items-center lg:justify-center lg:gap-7 lg:h-full'>
        <Tabs direction='/fonctionalities'>Fonctionnalités</Tabs>
        <Tabs direction='/tarifs'>Tarifs</Tabs>
        <Tabs direction='/faq'>FAQ</Tabs>
        <Tabs direction='/planner'>planner</Tabs>
      </ul>
      <div className='w-[33%] h-full flex items-center justify-end gap-5'>
        <Link to='/connexion' className='text-secondary lg:flex hidden'>Connexion</Link>
        <Link to='/inscription' className='hidden text-white bg-primary h-12 w-28 shadow-xl lg:flex items-center justify-center rounded-full hover:bg-secondary hover:text-primary transition-colors duration-100'>Inscription</Link>
        <div onClick={HandleMenuOpen} className='w-24 h-full flex cursor-pointer flex-col items-center justify-center lg:hidden'>
          <div className='w-[60%] rounded-full h-2 bg-primary'></div>
          <div className='w-[75%] h-2 rounded-full bg-secondary mt-1'></div>
          <div className='w-[60%] rounded-full h-2 bg-primary mt-1'></div>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5 }}
          id='mobileMenu' className='fixed p-5 top-0 right-0 w-[70%] z-10 h-screen bg-white flex flex-col justify-center items-center gap-5 md:hidden'>
          <div onClick={HandleMenuOpen} className='w-full flex cursor-pointer flex-col justify-center lg:hidden'>
            <motion.div initial={{ x: '5px' }} animate={{ x: '0px', transition: { duration: 0.9 } }} className='w-[12%] relative rounded-full h-2 bg-secondary'></motion.div>
            <motion.div initial={{ x: '12px' }} animate={{ x: '0px', transition: { duration: 1 } }} className='w-[12%] relative left-3 h-2 rounded-full bg-primary mt-1'></motion.div>
            <motion.div initial={{ x: '24px' }} animate={{ x: '0px', transition: { duration: 1 } }} className='w-[12%] relative left-6 rounded-full h-2 bg-secondary mt-1'></motion.div>
          </div>
          <ul className='flex flex-col justify-center w-full h-full space-y-8 px-4'>
            <MobileTabs direction='/' icon={<Home className='text-secondary' size={30} />} >Acceuil</MobileTabs>
            <MobileTabs direction='/fonctionalities' icon={<TbCategory className='text-secondary' size={30} />} >Fonctionalities</MobileTabs>
            <MobileTabs direction='/fonctionalities' icon={<RiShoppingCartLine className='text-secondary' size={30} />} >Tarifs</MobileTabs>
            <MobileTabs direction='/fonctionalities' icon={<FileCheck className='text-secondary' size={30} />} >FAQ</MobileTabs>
          </ul>
          <div className='w-full h-28 flex items-center gap-2 justify-center'>
            <Link to='/connexion' className='text-white flex items-center justify-center bg-secondary w-28 h-12 rounded-full shadow-xl'>Connexion</Link>
            <Link to='/inscription' className='text-white flex items-center justify-center bg-primary w-28 h-12 rounded-full shadow-xl'>Inscription</Link>
          </div>
        </motion.div>
      )}
    </nav >
  )
}

export default Navbar

const Tabs = ({ children, direction }) => {
  return (
    <Link to={direction}><li className='text-primary cursor-pointer hover:text-secondary'>{children}</li></Link>
  )
}


const MobileTabs = ({ children, direction, icon }) => {
  return (
    <Link className='flex items-center gap-5 text-lg' to={direction}>{icon}<li className='cursor-pointer'>{children}</li></Link>
  )
}