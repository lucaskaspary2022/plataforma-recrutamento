import React from 'react'
import Image from 'next/image'
import NavLogo from '../assets/NavLogo.jpeg'

function Header() {
  return ( // header and header
    <div className='flex p-6'> 
      <Image
        alt='BRASA Connect Logo'
        className='mx-[50px]'
        src={NavLogo}
        width={400}
      />
    </div>
  )
}

export default Header