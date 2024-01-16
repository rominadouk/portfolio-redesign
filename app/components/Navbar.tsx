import React from 'react'
import Image from 'next/image'
import hamburgerMenu from '../../public/assets/icons/hamburger-menu.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between mx-4 mt-4'>
        <div className='flex gap-3'>
            <p>RD</p>
            <p>Romina Douk</p>
        </div>
        <Image src={hamburgerMenu}  alt='three-line-menu' />
    </div>
  )
}

export default Navbar