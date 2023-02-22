import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Auth } from '../components/Auth/Auth'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner'

export const AppRouter = () => {
	const authenticated = true
	const checking = false

	if (checking === true) {
		return <LoadingSpinner />
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
			<Route path="/auth" element={<Auth />} />
		</Routes>
	)
}
