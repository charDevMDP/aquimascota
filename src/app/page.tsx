import { auth, signOut } from '@/auth'
import React from 'react'

const Home = async () => {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>AquiMascotas</p>

      <pre className='text-center'>
        { session && session?.user?.name}
      </pre>

      <form action={async()=>{
        'use server'
        await signOut()
      }}>
        <button type='submit' className='bg-amber-500 px-4 py-2'>SALIR</button>
      </form>

    </main>
  );
}

export default Home