'use client'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function MapPage() {
    
  const Map = useMemo(() => dynamic(
    () => import('./Map'),
    { 
      loading: () => <div className='h-48 md:h-56 rounded-md sticky bg-gray-200 text-center flex items-center border border-black border-dotted justify-center '><p className='text-xs md:text-md italic'>Cargando Mapa..</p></div>,
      ssr: false
    }
  ), [])

  return <div className='h-48 md:h-56 rounded-md sticky'>
    <Map />
    </div>
}