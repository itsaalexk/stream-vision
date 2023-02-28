import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { SongNavigator } from './components/SongNavigator/SongNavigator'

function App() {
	const [intro, setIntro] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setIntro(false)
		}, 3000)
	}, [intro])

	if (intro) return <h1>Cargando App...</h1>
	return (
		<>
			<Navbar />
			<SongNavigator />
		</>
	)
}

export default App
