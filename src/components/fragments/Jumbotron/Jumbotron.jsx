import React from 'react'
import { Link } from 'react-router-dom'

function Jumbotron() {
  return (
    <div className='bg-tech-1 aspect-tech-1 bg-no-repeat bg-contain bg-center flex lg:w-full lg:h-screen justify-center items-center flex-col lg:bg-repeat-x -mt-1'>
        <h1 className='font-bold text-white drop-shadow-2xl text-4xl lg:text-9xl text-center'>Innovate<span className='text-blue-600'>Tech</span><br />Solutions</h1>
        <Link to="/learn" className='bg-slate-200 ring-1 ring-slate-200 lg:text-base text-xs p-2 px-4 rounded-full font-semibold text-slate-950 mt-4 hover:bg-slate-950 hover:text-slate-200 transition duration-500'>Pelajari Lebih Jauh</Link>
    </div>
  )
}

export default Jumbotron