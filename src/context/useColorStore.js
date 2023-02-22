import { create } from 'zustand'

export const useColorStore = create(set => ({
	darkMode: true,
	enableDarkMode: () => set(state => ({ darkMode: (state.darkMode = true) })),
	disableDarkMode: () => set(state => ({ darkMode: (state.darkMode = false) }))
}))
