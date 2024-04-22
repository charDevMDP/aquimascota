'use client'
import { login } from '@/actions/auth.actions'
import { LoginSchema } from '@/utils/schema'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useTransition } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'
import { DEFAULT_LOGIN_REDIRECT } from '../../../../routes'
import { useSearchParams } from 'next/navigation'

const LoginForm = () => {

  const seachParams = useSearchParams();
  const urlError = seachParams.get('error') === 'OAuthAccountNotLinked' ? "El email ya fui por otro proveedor. (Email o Google)" : ''

  useEffect(() => {
    if(urlError !== ''){
      toast.error(urlError)
    }
  }, [urlError])
  
  const [isPending, startTransition] = useTransition()
  
  const handleClick = (provider: string = 'google') => {
      signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT})
    }
  
    

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

        <div className='text-center my-5'><span className='text-xs font-semibold'>o si queres podes</span></div>
        <button onClick={() => handleClick()}   className='bg-gray-200 w-full items-center gap-x-2 flex justify-center py-2 my-4 rounded-md'>
          <span className='font-semibold text-xs'>INICIA CON</span>
          <FcGoogle className='w-4 h-4' />
        </button>
      
      <div className='text-center mt-5'>
        <p>No tenes cuenta? <Link href={'/auth/register'} className=' font-bold'>Registrate</Link></p>
      </div>
    </div>
  )
}

export default LoginForm