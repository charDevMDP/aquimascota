'use server'

import { auth } from "@/auth"
import { prisma } from "@/utils/prisma"

export const createPost = async (data:any) => {

  const session = await auth();

  if(session){
  try {
    await prisma.post.create({
      data: {
        name: data.name,
        image: data.image,
        typePost: data.typePost,
        typePet: data.typePet,
        locationView: data.locationView,
        dateView: data.dateView,
        createUser: session.user!.id!,
      }
    })
  } catch (error) {
    console.log('ERROR AL CREAR POST ',  error)
    return {error: JSON.stringify(error) }
  }
  }else{
    console.log('Error posts ', session)
    return { error: 'Error post session'}
  }
}

export const getPosts = async () => {
  const allposts = await prisma.post.findMany({ include: { userId: true}});
  return allposts
}


export const getPostsUserById = async (id:string) => {
  const posts = await prisma.post.findMany({
    where: {
      createUser: id
    }
  })
  return posts
}



export const getPostById = async (id:string) => {
  const post = await prisma.post.findMany({
    where: {
      id: Number(id)
    }, include:{ userId: true }
  })
  return post[0]
}