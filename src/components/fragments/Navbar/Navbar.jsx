import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navigation = [
    { name: "Beranda", href: "#" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Hubungkan Kami", href: "#" },
]

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [navScroll, setNavScroll] = useState(false)

    const headerRef = useRef(null)

    function navButtonHandler() {
        setNavActive(!navActive);
    }

    useEffect(() => {


        function navScrolled() {
            const header = document.querySelector("header");
            const headerOffSet = header.offsetTop;

            if (window.scrollY > headerOffSet) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        }

        function handleDocumentClick(event) {
            if(headerRef.current && !headerRef.current.contains(event.target)) {
                setNavActive(false);
            }
        }


        window.addEventListener("scroll", navScrolled);
        document.addEventListener("click", handleDocumentClick)
        
        return () => {
            window.removeEventListener("scroll", navScrolled);
            document.removeEventListener("click", handleDocumentClick)
        }

    }, []);

    return (
        <>
            <header ref={headerRef} className={`fixed inset-x-0 top-0 z-10`}>
                <div className={`relative flex w-full justify-between px-4 lg:px-10 py-2 items-center ${navScroll    
                        ? 'bg-slate-950'
                        : !navScroll && navActive
                            ? 'bg-slate-950'
                            : 'bg-transparent'
                    } transition-all duration-300`}>
                    <div>
                        <a href="#" className='font-bold text-white text-xl lg:text-3xl'>I<span className='text-blue-600'>T</span>S</a>
                    </div>
                    <div>
                        <button className={`flex flex-col gap-y-1${navActive ? ` navActived` : ``} lg:hidden`} onClick={navButtonHandler}>
                            <span className='h-1 w-6 bg-white rounded-md transition-all duration-200 origin-top-left'></span>
                            <span className='h-1 w-6 bg-white rounded-md transition-all duration-200'></span>
                            <span className='h-1 w-6 bg-white rounded-md transition-all duration-200 origin-bottom-left'></span>
                        </button>
                        <nav className={`${navActive ? `flex ` : `hidden `}absolute inset-x-0 top-full flex-col bg-slate-950 text-right px-4 gap-y-2 py-3 lg:flex lg:flex-row lg:static lg:bg-transparent gap-x-5`}>
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className='text-white text-lg'>
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar