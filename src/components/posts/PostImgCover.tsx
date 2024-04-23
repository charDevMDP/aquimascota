'use client'
import React, { useState } from 'react'

const PostImgCover = ({post}:any) => {

  console.log(post)
  const [imgPost, setimgPost] = useState(post.image ? post.image : '/ImgNoFound.png')

  
  return (
    <div>
        <img width='100' src={imgPost} onError={() => setimgPost('/ImgNotFound.png')}  className="w-full object-cover object-center aspect-[4/3] lg:w-full" alt={'Imagen Posteo'} />
      </div>
  )
}

export default PostImgCover