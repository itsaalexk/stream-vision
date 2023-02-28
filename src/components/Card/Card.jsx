import {
	Image,
	Card,
	Text,
	Stack,
	Divider,
	CardBody,
	CardFooter
} from '@chakra-ui/react'
import ReactPlayer from 'react-player'

export const CardItem = ({ src, title, url }) => {
	return (
		<Card maxW={450} mt={10}>
			<CardBody>
				<Image src={src} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<ReactPlayer url={url} pip={true} width={400} height={300} />
					<Text>{title}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter></CardFooter>
		</Card>
	)
}
