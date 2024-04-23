import { prisma } from "@/utils/prisma";
//import PostItem from "./PostItem";
import { Post } from "@prisma/client";
import PostItem from "./PostItem";

const getPosts = async () => {
  const allposts = await prisma.post.findMany({ include: { userId: true}});
  return allposts
}

const ListPosts = async () => {

  const posts = await getPosts()

  console.log(posts)

  if(posts.length == 0) return <p className="text-center mt-5">No hay publicaciones aun.</p>

  return (
    <div className="mb-24 md:mb-12 w-full px-5 bg-gray-200">
    <div className="mb-5 grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {
        posts.length != 0 && 
        posts.map((post:Post) => (
            <PostItem post={post} />
          ))  
        }
    </div>    
    </div>
  )
}

export default ListPosts