'use client'
import React, { useEffect, useState } from 'react'

const TypePost = ({type}: {type: string}) => {

  const [typefinal, setTypefinal] = useState('')
  const [colorbtn, setColorbtn] = useState('amber')

  useEffect(() => {
    if(type == 'lost'){
      setTypefinal('Lo perdi')
    }else{
      setTypefinal('Lo encontre')
    }
  }, [type])
  
  return (
    
      <div className='flex items-center justify-center bg-amber-500 rounded-sm px-5 text-center'>
        <span className="uppercase text-xs text-white">{typefinal}</span>
      </div> 
    
  )
}

export default TypePost