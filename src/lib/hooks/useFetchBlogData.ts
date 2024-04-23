// hooks/useFetchData.ts
import { useEffect } from 'react'
import { getAllPublished } from '../notion'

export const useFetchData = () => {
	// const setTitle = useBlogStore(state => state.setTitle)
	// const setDate = useBlogStore(state => state.setDate)
	// const setContent = useBlogStore(state => state.setContent)
	// const setCover = useBlogStore(state => state.setCover)
	// const setTags = useBlogStore(state => state.setTags)

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAllPublished()
			// 	key={index}
			// title={item.title.title[0]?.plain_text}
			// content={item.content.rich_text[0]?.plain_text}
			// date={item.created}
			// cover={item.cover.files[0].file.url}
			// tags={item.tags}
			// if (data) {
			// 	setTitle(data.title)
			// 	setDate(data.date)
			// 	setContent(data.content)
			// 	setCover(data.cover)
			// 	setTags(data.tags)
			// }
		}

		fetchData()
	}, [])
}
