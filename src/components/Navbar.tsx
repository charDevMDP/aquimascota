import { auth } from '@/auth';
import React from 'react'

const Navbar = async() => {

  const session = await auth();

  return (
    <nav className='w-full justify-around h-12 flex items-center text-white bg-amber-500'>
      <div>
        <span className='font-bold'>AquiMascotas</span>
      </div>
      <div>
        <p>menu</p>
      </div>
      <div>
        <span>
          { 
            session ? session?.user?.name : <button >Iniciar</button>
          }
        </span>
      </div>
    </nav>
  )
}

export default Navbar