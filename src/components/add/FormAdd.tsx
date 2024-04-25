'use client'

import { useState } from "react"
import MapPage from "../map/PageMap"
import { usePostStore } from "@/store"
import ImageUpload from "./ImageUpload"

const FormAdd = () => {

  const [typePostSelect, setTypePostSelect] = useState('')

  const locationView = usePostStore((state)=> state.locationView)
  
  const typePost = [
    {
      id: 1,
      name: 'Mi mascota se perdio'
    },
    {
      id: 2,
      name: 'Encontre una mascota'
    }
  ]

  const typePet = [
    {
      id: 1,
      name: 'Perro'
    },
    {
      id: 2,
      name: 'Gato'
    },
    {
      id: 3,
      name: 'Otro'
    }
  ]

  const handleSubmit = async (formData: FormData)=> {
      console.log(formData.get('typepost'))
  }

  return (
    <div className='mt-5 px-5 pb-5 max-w-3xl mx-auto'>
      <form action={handleSubmit} className='space-y-2'>


        { /* Type Post */}
        <div className="col-span-full my-2">
        <label htmlFor="typepost" className="form-label">Tipo de Publicacion:</label>
          <div className="form-field">
            <select
            className="form-input"
            id="typepost"
            name="typepost"
            defaultValue=''
            onChange={(e) => setTypePostSelect(e.target.value)}
        >
            <option value="" selected>-- Seleccione --</option>
            {
              typePost.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))
            }
          </select>
          </div>
      </div>      
      
      {
        typePostSelect != '' &&
         <div className="my-2 pt-2">
         <label htmlFor="typepost" className="form-label">Foto a Publicar:</label>
            <ImageUpload image={''} />
         </div>    
      }

      { /* Type Pet */
      typePostSelect != '' &&
        <div className="col-span-full my-2">
        <label htmlFor="typepet" className="form-label">Tipo de Publicacion:</label>
          <div className="form-field">
            <select
            className="form-input"
            id="typepet"
            name="typepet"
            defaultValue={''}
        >
            <option value="" selected>-- Seleccione --</option>
            {
              typePet.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))
            }
          </select>
          </div>
      </div>
      }
      { /* Name */
    typePostSelect == '1' &&
    <div className="col-span-full my-2">
        <label htmlFor="name" className="form-label">Nombre al que responde:</label>
          <div className="form-field">
            <input type="text" id="name" 
            className="form-input" placeholder="Responde al nombre de.." />
        </div>
    </div>
    }
    { /* DateView */
    typePostSelect == '1' &&
    <div className="col-span-full my-2">
        <label htmlFor="dateview" className="form-label">Ultima vez visto:</label>
          <div className="form-field">
            <input type="date" min={new Date().toJSON().slice(0, 10)} id="dateview" 
            className="form-input" placeholder="Lo vi por ultimo vez.." />
        </div>
    </div>
    }
    { /* LocationView */
    typePostSelect !== '' &&
    <>
    <div className="col-span-full my-2">
        <label htmlFor="locationview" className="form-label">Ultima vez visto en:</label>
          <div className="form-field">
            <input name="locationview" type="text" id="locationview" 
            className="form-input" placeholder="Lo vi por ultima vez en.." />
        </div>
    </div>

    <div className='col-span-full my-2'>
    <label htmlFor="locationmap" className='form-label'>Selecciona tu ubicacion aproximada <span className=''> (OPCIONAL)</span></label>
      <MapPage  />
    </div>
    </>
    }


        <input type="submit" value="Publicar" className=' w-full bg-amber-500 hover:bg-amber-600 rounded-md text-white mt-2 py-2 px-4 uppercase font-bold text-sm cursor-pointer' />
      </form>
    </div>
  )
}

export default FormAdd