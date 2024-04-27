import { getPostById } from '@/actions/posts.actions'
import PostItem from '@/components/posts/post/PostItem';
import Title from '@/ui/Title';
import React from 'react'

const pagePost = async ({ params }:{ params: { id: string }}) => {
  
  const post = await getPostById(params.id);

  console.log("POST +++++++++++++++++++ ", post)
  
  return (
    <div className='mx-auto container md:pt-12 md:w-[80%]'>
    <Title title={'Publicacion'} subtitle='Detalles de la publicacion' />
    <PostItem post={post} />
  </div>
  )
}

export default pagePost