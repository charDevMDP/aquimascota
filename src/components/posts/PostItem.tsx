import Link from 'next/link';
import PostImgCover from './PostImgCover';
import TypePost from '@/ui/TypePost';


const PostItem = ({post}:{ post:any}) => {

  console.log(post)

  const checkAvatarUser = () => {

    let avatar = ''

    
    if(post.userId.image){
      avatar = post.userCreate.image
    }else{
      avatar = '/avatar.png'
    }
  
    return avatar  
  }



  return (
<Link href={`/posts/${post.id}`} className='mx-auto bg-white shadow-md hover:shadow-lg hover:border-gray-300 rounded-xl border border-gray-200 cursor-pointer md:hover:-translate-y-1'>
      
    <div className="flex flex-col h-full w-full">

    <div className="flex items-center px-4 py-3">
      
      <img className="h-8 w-8 rounded-full" src={checkAvatarUser()}/>
      <div className="ml-3 ">
        <div className='flex'>
          <span className="text-sm font-semibold antialiased block leading-tight">{post.userId.name}</span>
        </div>
        
        <span className="text-gray-600 text-xs block">{post.userId.email}</span>
      </div>
    </div>

      <PostImgCover post={post} />
      <div className='my-2'>
        {
         <TypePost type={post.typePost} />
        }
      </div>
      <div className='mx-4'>
      
      <div className='flex flex-col mb-4'>
        <span className='flex justify-end text-xs text-gray-400'>{new Date(post.createAt).toLocaleDateString('en-US')}</span>
      </div>
       </div>

</div>

    </Link>
   
  )
}

export default PostItem