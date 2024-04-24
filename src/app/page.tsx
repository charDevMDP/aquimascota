import { auth, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'

const Home = async () => {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className='mt-5 font-bold text-lg'>AquiMascotas</p>

      <p className='mt-5'>Bienvenidos a una web que busca ayudar a buscar y encontrar mascotas perdidas.</p>

      <Link className='bg-amber-500 text-white rounded-sm uppercase text-xs py-2 px-5 mt-5' href={'/posts'}>Ver publicaciones</Link>
    </main>
  );
}

export default Home