import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'

export const AppRouter = () => {
	const authenticated = true
	const checking = false

	if (checking === true) {
		return <Spinner size={'xl'} speed="1s" color="blue" />
	}

	return (
		<Routes>
			{authenticated ? (
				<>
					<Route path="/" element={<App />} />
					<Route path="*" element={<ErrorPage />} />
				</>
			) : (
				<>
					<Route path="/auth" element={<Auth />} />
					<Route path="/auth/*" element={<ErrorPage />} />
				</>
			)}
		</Routes>
	)
}
