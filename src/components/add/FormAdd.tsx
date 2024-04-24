'use client'

import { useState } from "react"

const FormAdd = () => {

  const [typePostSelect, setTypePostSelect] = useState('')
  
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

  const handleSubmit = async (formData: FormData)=> {
    
  }

  return (
    <div className='mt-5 px-5 py-10 shadow-md max-w-3xl mx-auto'>
      <form action={handleSubmit} className='space-y-5'>
        { /* Type Post */}
        <div className="col-span-full my-2">
        <label htmlFor="typepost" className="form-label">Tipo de Publicacion:</label>
          <div className="form-field">
            <select
            className="form-input"
            id="typepost"
            name="typepost"
            defaultValue={''}
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

      { /* Name */
    typePostSelect == '2' &&
    <div className="col-span-full my-2">
        <label htmlFor="name" className="form-label">Nombre al que responde:</label>
          <div className="form-field">
            <input type="text" id="name" 
            className="form-input" placeholder="Responde al nombre de.." />
        </div>
    </div>
    }
    { /* DateView */}
    <div className="col-span-full my-2">
        <label htmlFor="dateview" className="form-label">Ultima vez visto:</label>
          <div className="form-field">
            <input type="date" min={new Date().toJSON().slice(0, 10)} id="dateview" 
            className="form-input" placeholder="Lo vi por ultimo vez.." />
        </div>
    </div>

    { /* LocationView */}
    <div className="col-span-full my-2">
        <label htmlFor="locationview" className="form-label">Ultima vez visto en:</label>
          <div className="form-field">
            <input type="text" id="locationview" 
            className="form-input" placeholder="Lo vi por ultima vez en.." />
        </div>
    </div>

        <input type="submit" value="Publicar" className=' w-full bg-amber-500 hover:bg-amber-600 rounded-md text-white mt-2 py-2 px-4 uppercase font-bold text-sm cursor-pointer' />
      </form>
    </div>
  )
}

export default FormAdd