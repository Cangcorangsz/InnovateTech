import React from 'react'
import Jumbotron from './components/fragments/Jumbotron/Jumbotron'
import Navbar from './components/fragments/Navbar/Navbar'
import Layanan from './components/fragments/Layanan/Layanan'
import Portfolio from './components/fragments/Portfolio/Portfolio'
import Blog from './components/fragments/Blog/Blog'

function LandingPage() {
  return (
      <div>
        <Navbar />
        <Jumbotron />
        <Layanan />
        <Portfolio />
        <Blog />  
      </div>    
  )
}

export default LandingPage