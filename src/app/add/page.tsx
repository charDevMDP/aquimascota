import AddPost from '@/components/add/AddPost'
import FormAdd from '@/components/add/FormAdd'
import Title from '@/ui/Title'
import React from 'react'

const pageAdd = () => {
  return (
    <div className='mx-auto container md:pt-12 md:w-[80%]'>
    <Title title={'Publicar'} subtitle='Formulario para agregar publicacion' />
    <AddPost>
      <FormAdd />
    </AddPost>
  </div>
)
}

export default pageAdd