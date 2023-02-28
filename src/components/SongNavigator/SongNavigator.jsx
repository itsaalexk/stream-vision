import { Box, Divider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CardItem } from '../Card/Card'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

export const SongNavigator = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	console.log(import.meta.env)

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
				'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
			}
		}
		fetch(
			'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=coldplay',
			options
		)
			.then(response => response.json())
			.then(response => setData(response))
			.catch(err => console.error(err))
		setLoading(false)
		console.log(data)
	}, [])

	return (
		<Box w={'100%'} h={'600'} backgroundColor="white">
			<Divider orientation="horizontal" />

			{data.items === undefined ? (
				<LoadingSpinner />
			) : (
				data.items.map(video => (
					<ul>
						<CardItem
							src={video.bestThumbnails}
							title={video.title}
							url={video.url}
						/>
					</ul>
				))
			)}
		</Box>
	)
}
