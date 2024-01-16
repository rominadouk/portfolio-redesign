'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import hamburgerMenu from '../../public/assets/icons/hamburger-menu.svg'
import Link from 'next/link'

const Navbar = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)
    };
    console.log(hamburgerMenuIsOpen)
    
  return (
    <nav className={ hamburgerMenuIsOpen ? ' z-50 pt-4 w-full px-5 absolute bg-white' : 'z-50 pt-4 w-full px-5 absolute'}>
        <div className='flex justify-between'>
        <div className='flex gap-3'>
            <p>RD</p>
            <p>Romina Douk</p>
        </div>
        <Image src={hamburgerMenu}   className='lg:hidden' alt='three-line-menu' onClick = {toggleMobileMenu}/>
        </div>
        {
            hamburgerMenuIsOpen && (
                <div className='flex flex-col py-5 relative bg-white gap-4 text-center'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>LinkedIn</p>
                    <p>Github</p>
                    
                </div>
            )
        }
    </nav>
  )
}

export default Navbar