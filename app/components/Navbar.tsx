'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import hamburgerMenu from '../../public/assets/icons/hamburger-menu.svg'
import githubIcon from '../../public/assets/icons/github-icon.svg'
import linkedinIcon from '../../public/assets/icons/linkedin-icon.svg'

import Link from 'next/link'

const Navbar = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    
    const toggleMobileMenu = () => {
        setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)
    };
    // console.log(hamburgerMenuIsOpen)
    
  return (
    <nav className={ hamburgerMenuIsOpen ? ' z-50 pt-4 w-full px-5 absolute bg-white' : 'z-50 pt-4 w-full px-5 absolute lg:flex lg:justify-between lg:px-28 '}>
        <div className='flex justify-between'>
        <div className='flex gap-3'>
            <p className='text-3xl font-semibold'>RD</p>
            <p className='text-lg place-self-center'>Romina Douk</p>
        </div>
        <Image src={hamburgerMenu}   className='lg:hidden cursor-pointer' alt='three-line-menu' onClick = {toggleMobileMenu}/>
        </div>
        {/* Navbar View on Desktop */}
        <ul className='hidden lg:flex lg:items-center gap-5'>
            <Link href='/'>
                <li>Home</li>
            </Link>
            <Link href='/projects'>
                <li>Projects</li>
            </Link>
            <Link href='/about'>
                <li>About</li>
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
        {/* Navbar View END on Desktop */}
        {
            hamburgerMenuIsOpen && (
                <div className='flex flex-col py-5 relative bg-white text-center text-xl lg:hidden z-100'>
                    <ul className='flex flex-col gap-5' onClick={toggleMobileMenu}>
                        <Link href='/'>
                            <li>Home</li>
                        </Link>
                        <Link href='/projects' onClick={toggleMobileMenu}>
                            <li>Projects</li>
                        </Link>
                        <Link href='/about' onClick={toggleMobileMenu}>
                            <li>About</li>
                        </Link>
                        <Link href='/contact' onClick={toggleMobileMenu}>
                            <li>Contact</li>
                        </Link>
                        <Link href='https://www.linkedin.com/in/rominadouk/'  className='self-center' onClick={toggleMobileMenu} target='_blank'>
                            <li>
                                <Image src={linkedinIcon} alt='linkedin-icon' className='w-7' />
                            </li>
                        </Link>
                        <Link href='https://github.com/rominadouk'  className='self-center' onClick={toggleMobileMenu} target='_blank'>
                        <li>
                            <Image src={githubIcon} alt='github-icon' className='w-7 h-8' />
                        </li>
                        </Link>
                    </ul>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar