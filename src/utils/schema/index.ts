import { z } from 'zod'

export const RegisterSchema = z.object({
  username: z.string().trim().min(1, 'El nombre es obligatorio.'),
  email: z.string().email({ message: 'El email obligatorio'}),
  password: z.string().min(6, 'La contraseña debe contener al menos 6 caracteres'),
  confirmpassword: z.string().min(6)
}).refine(
  (values) => {
    return values.password === values.confirmpassword;
  },
  {
    message: "Las constraseñas no coinciden.",
    path: ["confirmpassword"],
  }
);

export const LoginSchema = z.object({
  email: z.string().trim().min(1,{message: 'El correo es obligatorio'}).email({message: 'El correo no es correcto.'}),
  password: z.string().trim().min(1,{message: 'La contraseña es obligatorio'})
})