import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { GithubSvg } from '../svg/GithubSvg'
import { SunSvg } from '../svg/SunSvg'
import { MoonSvg } from '../svg/MoonSvg'
import { HeartSvg } from '../svg/HeartSvg'
import { useNavigate } from 'react-router-dom'
import { useColor } from '../hooks/useColor'

export const Navbar = () => {
	const navigate = useNavigate()
	const theme = localStorage.getItem('theme')
	const { handleModeChange, darkMode } = useColor(theme)
	const handleNavigate = () => {
		navigate('/auth')
	}
	return (
		<Box
			w="100%"
			h="90px"
			backgroundColor={darkMode ? 'blackAlpha.900' : '#101b76'}
			display={'flex'}
			alignItems="center"
			justifyContent={'space-evenly'}
		>
			<Text
				sx={{ marginTop: '1%', color: 'white', marginLeft: '30px' }}
				fontSize="2xl"
				fontWeight={'extrabold'}
			>
				StreamVision
			</Text>

			<Input
				sx={{ marginLeft: '10%', marginTop: '1%', color: 'white' }}
				htmlSize={4}
				size="md"
				width={400}
				variant="outline"
				placeholder="Introduce aqui el elemento a buscar"
			/>
			<Stack direction={'row'} mt="1%" gap="4" ml="200">
				<Button
					variant={'outline'}
					colorScheme={'whiteAlpha'}
					sx={{ borderRadius: '100' }}
				>
					<GithubSvg />
				</Button>
				<Button
					variant={'outline'}
					colorScheme={'whiteAlpha'}
					sx={{ borderRadius: '100' }}
					mt={'1%'}
					onClick={handleModeChange}
				>
					{darkMode ? <SunSvg /> : <MoonSvg />}
				</Button>
				<Button
					variant={'solid'}
					colorScheme={'whiteAlpha'}
					mt={'1%'}
					sx={{ borderRadius: '100' }}
				>
					Sponsor {<HeartSvg />}
				</Button>
				<Button
					onClick={handleNavigate}
					variant={'solid'}
					colorScheme={'whiteAlpha'}
					mt={'1%'}
					sx={{ borderRadius: '100' }}
				>
					Sign In / Sign Up
				</Button>
			</Stack>
		</Box>
	)
}
