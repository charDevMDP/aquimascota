'use server'

import { getUserByEmail } from "@/utils/data/user";
import { prisma } from "@/utils/prisma";
import { RegisterSchema } from "@/utils/schema";
import bcrypt from 'bcryptjs'

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