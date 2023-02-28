import { create } from 'zustand'

export const useInput = create(set => ({
	input: '',
	setInput: e => set(state => ({ input: e }))
}))
