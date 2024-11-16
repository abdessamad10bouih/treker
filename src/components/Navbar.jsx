import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className='w-[80%] h-20 flex items-center'>
      <div className='w-[33%] flex items-center h-full'>
        <Link to='/'><img src="/logo.png" className='w-[60px]' alt="logo" /></Link>
      </div>
      <ul className='w-[33%] flex items-center justify-center gap-7 h-full'>
        <Tabs direction='/fonctionalities'>Fonctionnalités</Tabs>
        <Tabs direction='/tarifs'>Tarifs</Tabs>
        <Tabs direction='/faq'>FAQ</Tabs>
        <Tabs direction='/planner'>planner</Tabs>
      </ul>
      <div className='w-[33%] h-full flex items-center justify-end gap-5'>
        <Link to='/connexion' className='text-secondary'>Connexion</Link>
        <Link to='/inscription' className='text-white bg-primary h-12 w-28 shadow-xl flex items-center justify-center rounded-full hover:bg-secondary hover:text-primary transition-colors duration-100'>Inscription</Link>
      </div>
    </nav>
  )
}

export default Navbar

const Tabs = ({ children, direction }) => {
  return (
    <Link to={direction}><li className='text-primary cursor-pointer hover:text-secondary'>{children}</li></Link>
  )
}