import React from 'react'
import Card from './LayananCard/Card'

function Layanan() {
    return (
        <>
            <section id='layanan' className='py-5'>
                <div className='container mx-auto'>
                    <h1 className='text-center text-2xl font-bold text-slate-950 lg:text-4xl'>Layanan Kami</h1>
                    <p className='text-sm text-center mx-8 lg:text-base'>Kenali layanan yang kami berikan</p>
                    <Card />
                </div>
            </section>
        </>
    )
}

export default Layanan