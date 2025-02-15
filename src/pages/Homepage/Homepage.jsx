import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Vision from './components/Vision'
import Footer from '/src/components/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Vision />
      <Footer />
    </div>
  )
}

export default Homepage