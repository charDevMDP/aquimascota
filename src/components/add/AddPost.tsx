'use client'
import { createPost } from '@/actions/posts.actions';
import { auth } from '@/auth';
import { DateTime } from 'next-auth/providers/kakao';
import { redirect } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const AddPost = ({children}: {children: React.ReactNode}) => {

  
  const handleSubmit = async (formData: FormData)=> {
    
    console.log('FORM ',formData.get('typepost'))

    let formdateview = formData.get('dateview');
    let dataview: Date
    if(!formdateview){
      toast.warning('Debe ingresar una fecha.')
      return
    }else{
      dataview = new Date(formdateview.toString())
      console.log('DATEV ', dataview)
    }

    const data = {
      name: formData.get('name'),
      image: formData.get('image'),
      typePost: formData.get('typepost'),
      typePet: formData.get('typepet'),
      locationView: formData.get('locationview'),
      dateView: dataview,
    }

    
    if(data.typePost == '') {
      toast.warning('Debe seleccionar un tipo de publicacion.')
      return
    }

    if(data.typePost == 'lost' && data.name == ''){
      toast.warning('Debe ingresar un nombre.')
      return
    }

    const response:any = await createPost(data);
    
    console.log('RESP ', response)
    if(response){
      if(response.error){
      toast.error('Error al crear post')
      return
      }
    }else{
      toast.success('Post create correctamente.')
      redirect('/posts')
    }
    
    

    

      console.log(data)
  }


  return (
    <div className='mt-5 px-5 pb-5 max-w-3xl mx-auto'>
    <form action={handleSubmit} className='space-y-2'>
      { children}
      <input type="submit" value="Publicar" className=' w-full bg-amber-500 hover:bg-amber-600 rounded-md text-white mt-2 py-2 px-4 uppercase font-bold text-sm cursor-pointer' />
    </form>
    </div>
  )
}

export default AddPost