import { auth, signOut } from '@/auth';
import { IoMdExit, IoMdAddCircleOutline } from "react-icons/io";

import Image from 'next/image';

import React from 'react'
import Link from 'next/link';

const User = async() => {

  const session = await auth();

  return (
    <>
       { 
          session ? ( 
            <div className='flex items-center gap-2'>
              <span className='text-xs'>
              {session?.user?.name}
              </span>
              <Image alt='avatar' width={25} height={25} className='rounded-full border bg-gray-200' src={session.user?.image ? session.user.image : '/avatar.png'} /> 
              <Link href={'/add'} className='hover:text-gray-900'> 
                <IoMdAddCircleOutline className='w-5 h-5' />
              </Link> 
              <form className='flex' action={async()=> {
                'use server'
                await signOut()
              }}>
                 <button type='submit'>
                <IoMdExit className='w-5 h-5 hover:text-gray-900' />
              </button>
              </form>
             
            </div>
          ) : <Link href={'/auh/login'} className='text-xs rounded-sm px-3 py-1 uppercase bg-white text-amber-500 hover:font-bold'>Iniciar</Link>
        }
    </>
  )
}

export default User