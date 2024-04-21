'use client'
import { login } from '@/actions/auth.actions'
import { LoginSchema } from '@/utils/schema'
import Link from 'next/link'
import React, { useTransition } from 'react'
import { toast } from 'sonner'

const LoginForm = () => {

  const [isPending, startTransition] = useTransition()
  
  const handleSubmit = async(formData:FormData) => {

    

    console.log(formData.get('email'))
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    const result = LoginSchema.safeParse(data)

     if(!result.success){
        result.error.issues.map(issue => {
          toast.error(issue.message)
        })
        return
     }

     startTransition(() => {
      
      login(result.data).then((response:any) => {

        if(response.error){
          toast.error(response.error)
          return
        }
    
      })
  
  
    })
    
    
  }

  return (
    <div className='w-1/2 container mx-auto py-5'>
      <h1 className='font-bold text-xl text-center mb-4'>Inicie su sesion</h1>
      <form action={handleSubmit} >
          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className=" p-2 rounded-md block mb-2 w-full"
            placeholder="user@email.com"
          />


          <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
            Constraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className=" p-2 rounded-md block mb-2 w-full"
            placeholder="********"
          />
           <button type="submit" disabled={isPending} className="w-full bg-amber-500 text-white p-2 rounded-md mt-2  disabled:bg-slate-300 disabled:cursor-wait">
          Iniciar
        </button>
      </form>
      <div className='text-center mt-5'>
        <p>No tenes cuenta? <Link href={'/auth/register'} className=' font-bold'>Registrate</Link></p>
      </div>
    </div>
  )
}

export default LoginForm