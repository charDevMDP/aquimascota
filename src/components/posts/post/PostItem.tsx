import { Post } from '@prisma/client'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import MapView from './MapView'
import UserDetails from './UserDetails'
import TypePost from '@/ui/TypePost'
import PostImgCover from '../PostImgCover'

const PostItem = ({post}:any) => {

  return (
    <div className='p-5 md:p-2 md:py-4 mb-24 w-1/2 mx-auto'>

    <TypePost type={post.typePost} />

    <PostImgCover post={post} />
    <div className='flex flex-row items-center gap-2 mt-2'>
      <p className='text-sm font-bold'>Tipo de mascota: </p>
      <p className='text-sm md:text-md capitalize'>{ 
      post.typePet == 'dog' ? 'Perro'
      : (
        post.typePet == 'cat' ? 'Gato' : 'Otro'
      )
      }</p>
    </div>
    {
      post.name && (
        <div className='flex flex-row items-center gap-2 mt-2'>
        <p className='text-sm font-bold'>Responde a nombre de: </p>
        <p className='text-sm md:text-md capitalize'>{post.name}</p>
      </div>
      )
    }

<div className='flex flex-row items-center gap-2 mt-2'>
        <p className='text-sm font-bold'>Ultima vez visto: </p>
        <p className='text-sm md:text-md capitalize'>{new Date(post.dateView).toLocaleDateString("en-US")}</p>
      </div>
    
    <div className='mt-5'>
      <MapView location={post.locationmap}/>
    </div>

      <div className='text-center flex justify-center items-center text-xs mt-2'>
        <IoLocationOutline  className='mr-1'/>
        <span>Visto por: {post.locationView}</span>
      </div>
    
    <UserDetails user={post.userId} />
      
    <span className='text-xs italic flex justify-end mt-2'>Publicado el: {new Date(post.createAt).toLocaleDateString('en-US')}</span>

  </div>
  )
}

export default PostItem