import { useState } from 'react'
import { useColorStore } from '../context/useColorStore'

export const useColor = initialState => {
	const darkMode = useColorStore(state => state.darkMode)
	const enableDarkMode = useColorStore(state => state.enableDarkMode)
	const disableDarkMode = useColorStore(state => state.disableDarkMode)
	const [isDarkMode, setIsDarkMode] = useState(initialState)
	localStorage.setItem('theme', darkMode)

	const handleModeChange = () => {
		setIsDarkMode(!isDarkMode)

		if (isDarkMode) {
			enableDarkMode()
		}
		if (isDarkMode === false) {
			disableDarkMode()
		}
	}

	return {
		handleModeChange,
		darkMode
	}
}
