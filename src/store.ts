import { create } from 'zustand'

interface Store {
  locationView: string
  setLocation: (location: any) => void 
}

export const usePostStore = create<Store>((set)=> ({
  locationView: '',
  setLocation: (location) => {  set(() => ({ locationView: location }) )}
}))