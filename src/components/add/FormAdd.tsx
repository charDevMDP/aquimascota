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
      value: 'lost',
      name: 'Mi mascota se perdio'
    },
    {
      id: 2,
      value: 'found',
      name: 'Encontre una mascota'
    }
  ]

  const typePet = [
    {
      id: 1,
      value: 'dog',
      name: 'Perro'
    },
    {
      id: 2,
      value: 'cat',
      name: 'Gato'
    },
    {
      id: 3,
      value: 'other',
      name: 'Otro'
    }
  ]



  return (
    <>

        { /* Type Post */}
        <div className="col-span-full my-2">
        <label htmlFor="typepost" className="form-label">Tipo de Publicacion:</label>
          <div className="form-field">
            <select
            className="form-input"
            id="typepost"
            name="typepost"
            defaultValue={typePostSelect}
            value={typePostSelect}
            onChange={(e) => setTypePostSelect(e.target.value)}
        >
            <option value="" selected>-- Seleccione --</option>
            {
              typePost.map(type => (
                <option key={type.id} value={type.value}>{type.name}</option>
              ))
            }
          </select>
          </div>
      </div>      
      
      { /* Photo */
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
                <option key={type.id} value={type.value}>{type.name}</option>
              ))
            }
          </select>
          </div>
      </div>
      }
      { /* Name */
    typePostSelect == 'lost' &&
    <div className="col-span-full my-2">
        <label htmlFor="name" className="form-label">Nombre al que responde:</label>
          <div className="form-field">
            <input type="text" id="name" name="name" 
            className="form-input" placeholder="Responde al nombre de.." />
        </div>
    </div>
    }
    { /* DateView */
    typePostSelect != '' &&
    <div className="col-span-full my-2">
        <label htmlFor="dateview" className="form-label">Ultima vez visto:</label>
          <div className="form-field">
            <input type="datetime-local" max={new Date().toJSON().slice(0, 10)} id="dateview" name="dateview" 
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
    <label htmlFor="locationmap" className='form-label'>Selecciona la ubicacion aproximada donde { typePostSelect == 'Mi mascota se perdio'  ? 'perdi' : 'vi'} <span className=''> (OPCIONAL)</span></label>
      <MapPage  />
    </div>
    </>
    }


    </>
  )
}

export default FormAdd