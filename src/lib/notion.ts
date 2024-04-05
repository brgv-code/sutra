import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NOTION_CMS,
})

interface Tags {
	id: string
	name: string
	multi_select: MultiSelectTags[]
}
interface MultiSelectTags {
	id: string
	name: string
	color: string
}
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
const getPageMetaData = (post: any) => {
	const getTags = (tags: Tags) => {
		const multiSelectTags = tags.multi_select
		const allTags = multiSelectTags.map(tag => {
			return tag.name
		})

		return allTags
	}

	return {
		id: post.id,
		title: post.properties.Name,
		slug: post.properties.Slug,
		tags: getTags(post.properties.Tags),
		published: post.properties.Published,
		created: getToday(post.created_time),
		content: post.properties.Content,
		cover: post.properties.Cover,
		words: post.properties.Words,
		reading_time: post.properties.Reading_time,
		references: post.properties.References,
	}
}

export const getAllPublished = async () => {
	const databaseId = process.env.DATABASE_ID || ''

	const posts = await notion.databases.query({
		database_id: databaseId,

		sorts: [
			{
				property: 'Created',
				direction: 'descending',
			},
		],
	})

	const allPosts = posts.results

	return allPosts.map(post => {
		const p = getPageMetaData(post)
		console.log(p, 'p')
		return p
	})
}
