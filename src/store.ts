import { User } from 'next-auth'
import { create } from 'zustand'

interface StorePosts {
  locationView: string
  setLocation: (location: any) => void 
}

interface StoreUser {
  user: User | null,
  setUser: (user:User) => void
}

export const usePostStore = create<StorePosts>((set)=> ({
  locationView: '',
  setLocation: (location) => {  set(() => ({ locationView: location }) )}
}))


export const useUserStore = create<StoreUser>((set) => ({
  user: null,
  setUser: (user) => { set(() => ({ user: user}))}
}))