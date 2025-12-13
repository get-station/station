import { create } from 'zustand'

interface StoreState {}

export const useStore = create<StoreState>()((set, get) => ({}))
