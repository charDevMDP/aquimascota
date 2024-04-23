import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./utils/prisma"
import { getUserById } from "./utils/data/user"

export const { auth, 
  handlers: {GET, POST }, 
  signIn, 
  signOut 
} = NextAuth({
  callbacks: {
    async session({token,session}:{ token:any, session: any}){
      if(token.sub && session.user){
       session.user.id = token.sub
      }
      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
})