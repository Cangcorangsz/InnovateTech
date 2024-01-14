import React from 'react'

function LearnMore() {
    return (
        <>
            <div className='bg-slate-900 md:h-screen w-full'>
                <div className='container flex lg:px-16 px-7 flex-col text-start mx-auto pt-5'>
                    <h1 className='text-3xl my-4 font-bold text-white lg:text-8xl'>Innovate<span className='text-blue-600'>Tech</span> <br /> Solutions</h1>
                    <p className='text-white text-xl indent-2'>
                        Didirikan pada tahun 2010 oleh sekelompok profesional teknologi berbakat yang memiliki visi untuk menghadirkan solusi inovatif dalam dunia bisnis.
                        Kami bertujuan untuk menjadi pionir dalam pengembangan perangkat lunak khusus
                        dan memberikan konsultasi teknologi yang
                        canggih untuk membantu perusahaan mencapai tujuan mereka.
                    </p>
                    <br />
                    <p className='text-white text-xl indent-2'>
                        Setelah mendirikan perusahaan, fokus awal kami adalah menghadirkan solusi perangkat lunak
                        yang dapat disesuaikan untuk berbagai industri. Seiring waktu, kami mulai memperluas jangkauan
                        layanan kami untuk mencakup pengelolaan proyek dan konsultasi teknologi tingkat tinggi. Dengan
                        semangat inovasi, kami berhasil menangani proyek-proyek
                        kompleks dan membangun reputasi sebagai mitra teknologi yang dapat diandalkan.
                    </p>
                    <a href="/" className='bg-slate-200 ring-1 ring-slate-200 lg:text-base text-base p-2 px-6 rounded-full font-semibold text-slate-950 mt-4 hover:bg-slate-950 hover:text-slate-200 transition duration-500 w-fit mb-6'>Kembali</a>
                </div>
            </div>
        </>
    )
}

export default LearnMore