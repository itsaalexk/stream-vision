import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { ArrowLeftSvg } from '../../svg/ArrowLeftSvg'

export const ErrorPage = () => {
	const handleClick = () => {
		const navigate = useNavigate()
		redirect('/')
	}
	return (
		<>
			<Box display={'flex'} justifyContent="center" mt="12%">
				<Text fontSize="7xl" color="red">
					404
				</Text>

				<Text fontSize="3xl" color="black" mt="40px" ml="10px">
					page not found {':('}
				</Text>
			</Box>
			<Box display={'flex'} justifyContent="center" mt="5%">
				<Button onClick={handleClick} leftIcon={<ArrowLeftSvg />}>
					Take me home
				</Button>
			</Box>
		</>
	)
}
