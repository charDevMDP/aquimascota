'use client'
import { getImagePath } from '@/utils/getImagePath'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

const ImageUpload = ({image}:{image: string | undefined}) => {

  const [imageUrl, setImageUrl] = useState('')
  return (
    <CldUploadWidget onSuccess={(result, { widget }) => { 
      if(result.event === 'success'){
        widget.close()
        //@ts-ignore
        setImageUrl(result.info?.secure_url)
      }
    }} uploadPreset='nbefq9q9' options={{ multiple: false, maxFiles: 1 }}>
      {
        ({open}) => (
          <>
            <div className=''>
              <label className='text-slate-800'></label>
              <div onClick={()=> open()} className='relative cursor-pointer hover:opacity-70 border rounded-md p-10 border-gray-500 flex flex-col justify-center items-center gap-4 text-gray-600 bg-slate-50'>
                <TbPhotoPlus size={50} />
                <p>Agregar Imagen</p>
                { 
                  imageUrl && (
                    <div className='absolute inset-0 w-full h-full'>
                      <Image fill style={{ objectFit: 'contain'}} src={imageUrl} alt='Imagen producto' />
                    </div>
                  )
                }
              </div>
            </div>
            {
              image && !imageUrl && (
                <div className="space-y-2">
                  <label>Image actual:</label>
                    <div className='relative w-64 h-64'>
                      <Image fill src={getImagePath(image)} alt='Imagen producto' style={{objectFit: 'contain'}}/>
                    </div>
                </div>
              )
            }
            <input type="hidden" name='image' defaultValue={imageUrl ? imageUrl : image} />
          </>
        )
      }
    </CldUploadWidget>
  )
}

export default ImageUpload