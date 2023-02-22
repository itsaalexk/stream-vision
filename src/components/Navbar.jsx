import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { GithubSvg } from '../svg/GithubSvg'
import { SunSvg } from '../svg/SunSvg'
import { MoonSvg } from '../svg/MoonSvg'
import { HeartSvg } from '../svg/HeartSvg'

export const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const handleModeChange = () => {
		setIsDarkMode(!isDarkMode)
		console.log(isDarkMode)
	}
	return (
		<Box
			w="100%"
			h="90px"
			backgroundColor={isDarkMode ? 'blackAlpha.900' : '#101b76'}
			display={'flex'}
		>
			<Text
				sx={{ marginTop: '1%', color: 'white', marginLeft: '30px' }}
				fontSize="2xl"
				fontWeight={'extrabold'}
			>
				StreamVision
			</Text>

			<Input
				sx={{ marginLeft: '30%', marginTop: '1%', color: 'white' }}
				htmlSize={4}
				sixe="md"
				width={500}
				variant="filled"
				placeholder="Introduce aqui el elemento a buscar"
			/>
			<Stack direction={'row'} mt="1%" gap="5" ml="60">
				<Button
					variant={'outline'}
					colorScheme={'whiteAlpha'}
					mt={'1%'}
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
					{isDarkMode ? <MoonSvg /> : <SunSvg />}
				</Button>
				<Button
					variant={'solid'}
					colorScheme={'whiteAlpha'}
					mt={'1%'}
					sx={{ borderRadius: '100' }}
				>
					Sponsor {<HeartSvg />}
				</Button>
			</Stack>
		</Box>
	)
}
