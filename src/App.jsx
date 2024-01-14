import React from 'react'
import Jumbotron from './components/fragments/Jumbotron/Jumbotron'
import Navbar from './components/fragments/Navbar/Navbar'
import Layanan from './components/fragments/Layanan/Layanan'
import Portfolio from './components/fragments/Portfolio/Portfolio'

function LandingPage() {
  return (
      <div>
        <Navbar />
        <Jumbotron />
        <Layanan />
        <Portfolio />
      </div>    
  )
}

export default LandingPage