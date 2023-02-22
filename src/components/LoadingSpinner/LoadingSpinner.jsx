import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

export const LoadingSpinner = () => {
	return (
		<Box display={'flex'} justifyContent="center" mt={'15%'}>
			<Spinner size={'xl'} speed="1s" color="red" />
		</Box>
	)
}
