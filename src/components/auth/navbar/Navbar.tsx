import React from 'react'
import User from './User'
import Link from 'next/link'

const Navbar = () => {


  return (
    <nav className='container mx-auto px-5 rounded-md justify-between h-12 flex items-center text-white bg-amber-500'>
      <Link href={'/posts'}>
        <span className='font-bold hover:text-black'>AquiMascotas</span>
      </Link>
     
      <div>
        <User />
      </div>
    </nav>
  )
}

export default Navbar