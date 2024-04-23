'use server'

import { signIn } from "@/auth";
import { getUserByEmail } from "@/utils/data/user";
import { prisma } from "@/utils/prisma";
import { LoginSchema, RegisterSchema } from "@/utils/schema";
import bcrypt from 'bcryptjs'
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";

export const register = async (values:any) => {

  const result = RegisterSchema.safeParse(values);

  if(!result.success){
    return {
      errors: result.error.issues
    }
 }

 const hanshedPassword = await bcrypt.hash(result.data.password, 10);

 try {
  const userExisting = await getUserByEmail(result.data.email);
  if(userExisting) return { error: 'El email ya esta en uso.'}

  await prisma.user.create({
    data: {
      name: result.data.username,
      email: result.data.email,
      password: hanshedPassword
    }
  })

    return { success: 'Usuario creado exitosamente.'}

 } catch (error) {
    return { error: 'Error al crear el usuario.'}
 }

}


export const login = async (values:any) => {

  const result = LoginSchema.safeParse(values);

  if(!result.success){
    return {
      errors: result.error.issues
    }
 }

 try {
    await signIn('credentials', { 
      email: result.data.email, 
      password: result.data.password, 
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
 } catch (error) {
    if(error instanceof AuthError){
      switch(error.type){
        case 'CredentialsSignin':
          return { error: 'Usuario o contraseña incorrecta'}
        default:
          return { error: 'Ocurrio algun error.' }
      }
    }
    throw error
 }

  console.log(values)
  return ''
}
