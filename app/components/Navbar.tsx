'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import hamburgerMenu from '../../public/assets/icons/hamburger-menu.svg'
import githubIcon from '../../public/assets/icons/github-icon.svg'
import linkedinIcon from '../../public/assets/icons/linkedin-icon.svg'
import logo from '../../public/favicon.svg'


import Link from 'next/link'

const Navbar = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    
    const toggleMobileMenu = () => {
        setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)
    };

    
  return (

    <nav className={ `z-50 pt-4 w-full px-5 absolute lg:flex lg:justify-between lg:px-28 ${hamburgerMenuIsOpen ? ' z-50 pt-4 w-full px-5 absolute bg-white lg:bg-transparent' : '' }`}>

        <div className='flex justify-between'>
            <div className='flex gap-3'>
                {/* logo */}
                <Link href={'/'}>
                    <Image src={logo} alt='rd-logo' className='w-10'/>
                </Link>

                <p className='text-lg place-self-center'>Romina Douk</p>
            </div>
            <button onClick={toggleMobileMenu} className="flex flex-col justify-center items-center lg:hidden">
                <span className={`bg-dark-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${hamburgerMenuIsOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                </span>
                <span className={`bg-dark-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${hamburgerMenuIsOpen ? 'opacity-0' : 'opacity-100'}`}>
                </span>
                <span className={`bg-dark-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${hamburgerMenuIsOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
                </span>    
            </button>

        </div>
            {/* Mobile View */}
                    <div className={`flex flex-col py-5 relative  text-center text-xl lg:hidden z-100 transition-all duration-300 ease-out transform  ${hamburgerMenuIsOpen ? 'translate-y-2 opacity-100 visible pointer-events-auto' : 'translate-y-1 opacity-0 invisible pointer-events-none'}`}>
                        <ul className='flex flex-col gap-5' onClick={toggleMobileMenu}>
                            <Link href='/' >
                                <li>Home</li>
                            </Link>
                            <Link href='/projects' >
                                <li>Projects</li>
                            </Link>
                            <Link href='/contact'>
                                <li>Contact</li>
                            </Link>
                            <Link href='https://www.linkedin.com/in/rominadouk/'  className='self-center' target='_blank'>
                                <li>
                                    <Image src={linkedinIcon} alt='linkedin-icon' className='w-7' />
                                </li>
                            </Link>
                            <Link href='https://github.com/rominadouk'  className='self-center'  target='_blank'>
                                <li>
                                    <Image src={githubIcon} alt='github-icon' className='w-7 h-8' />
                                </li>
                            </Link>
                        </ul>
                    </div>



        {/* Navbar View on Desktop */}
        <ul className='hidden lg:flex lg:items-center gap-5'>
            <Link href='/' >
                <li>Home</li>
            </Link>
            <Link href='/projects'>
                <li>Projects</li>
            </Link>
            <Link href='/contact'>
                <li>Contact</li>
            </Link>
            <Link href='https://www.linkedin.com/in/rominadouk/' target='_blank'>
                <li>
                    <Image src={linkedinIcon} alt='linkedin-icon' className='w-7' />
                </li>
            </Link>
            <Link href='https://github.com/rominadouk'  target='_blank'>
                <li>
                    <Image src={githubIcon} alt='github-icon' className='w-7 h-8' />
                </li>
            </Link>
        </ul>
        {/* END Mobile Menu */}
    </nav>
  )
}

export default Navbar