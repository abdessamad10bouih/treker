import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Planifier from '../components/Planifier'
import Tarifs from '../components/Tarifs'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <section className='w-full flex flex-col items-center'>
        <Navbar />
        <HeroSection />
        <Planifier />
        <Tarifs />
        <NewsLetter />
        <Footer />
    </section>
  )
}

export default LandingPage