import React from 'react'
import MapLocation from './MapLocation'

const MapView = ({location }: {location: any}) => {

  return (
    <>
    {
      location ? (
        <MapLocation location={location} />
      ):(
        <img src="/notLocation-min2.png" alt="No hay ubicacion" className='w-full h-[150px] mx-auto' />
      )
    }
    </>
  )
}

export default MapView