import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NOTION_CMS,
})

function getToday(datestring: string) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	let date = new Date()

	if (datestring) {
		date = new Date(datestring)
	}

	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	let today = `${month} ${day}, ${year}`

	return today
}
const getPageMetaData = post => {
	const getTags = tags => {
		const allTags = tags.map(tag => {
			return tag.name
		})

		return allTags
	}

	return {
		id: post.id,
		title: post.properties.Name,
	}
}

export const getAllPublished = async () => {
	const posts = await notion.databases.query({
		database_id: process.env.DATABASE_ID,

		sorts: [
			{
				property: 'Created',
				direction: 'descending',
			},
		],
	})

	const allPosts = posts.results

	return allPosts.map(post => {
		return getPageMetaData(post)
	})
}
