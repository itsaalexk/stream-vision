import {
	Image,
	Card,
	Text,
	Stack,
	CardBody,
	CardFooter
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import { useColor } from '../../hooks/useColor'

export const CardItem = ({ src, title, url }) => {
	const { darkMode } = useColor()
	return (
		<Card
			maxW={450}
			mt={10}
			variant="outline"
			backgroundColor={darkMode ? 'black' : 'white'}
			color={darkMode ? 'white' : 'black'}
		>
			<CardBody>
				<Image src={src} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<ReactPlayer url={url} pip={true} width={400} height={300} />
					<Text>{title}</Text>
				</Stack>
			</CardBody>

			<CardFooter></CardFooter>
		</Card>
	)
}
