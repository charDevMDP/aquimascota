'use client'
import { RegisterSchema } from '@/utils/schema'
import Link from 'next/link'
import React, { useTransition } from 'react'
import { toast } from 'sonner'

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async(formData:FormData) => {
    
    console.log('FORM DATA ', formData.getAll)
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmpassword: formData.get('confirmpassword')
    }

    const result = RegisterSchema.safeParse(data)

     if(!result.success){
        result.error.issues.map(issue => {
          toast.error(issue.message)
        })
        return
     }
     
     
     startTransition(() => {
      
      // llamar accion para registrar usuario
  
  
    })
  }
 
  
  return (
    <div className='w-1/2 container mx-auto py-5'>
    <h1 className="font-bold text-2xl text-center mb-2">Register</h1>

    <form action={handleSubmit} className="">
      
          <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Usuario:
          </label>
          <input
          id="username"
          type="text"
          name="username"
          className="p-2 rounded-md block mb-2  w-full"
          placeholder="yourUser123"
          />



          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
          </label>
          <input
          type="email"
          id="email"
          name="email"
          className="p-2 rounded-md block mb-2  w-full"
          placeholder="user@email.com"
          />


          <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Contraseña:
          </label>
          <input
          type="password"
          id="password"
          name="password"
          className="p-2 rounded-md block mb-2  w-full"
          placeholder="********"
          />

          <label
          htmlFor="confirmpassword"
          className="text-slate-500 mb-2 block text-sm"
          >
          Repetir Contraseña:
          </label>
          <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          className="p-2 rounded-md block mb-2  w-full"
          placeholder="********"
          />
  <button type="submit" disabled={isPending} className="w-full bg-amber-500 text-white p-2 rounded-md mt-2 disabled:bg-slate-300 disabled:cursor-wait">
          Registrarse
        </button>
      </form>
      <div className='text-center mt-5'>
        <p>Ya tenes cuenta? <Link href={'/auth/login'} className=' font-bold'>Inicia sesion</Link></p>
      </div>
  </div>
  )
}

export default RegisterForm