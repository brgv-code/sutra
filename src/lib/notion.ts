import { Client } from '@notionhq/client'

const notion = new Client({
	auth: process.env.NOTION_CMS,
})

export interface Tags {
	id: string
	name: string
	multi_select: MultiSelectTags[]
}

export interface Content {
	text: string
	annotations: string
}

export interface Notion_Data {
	content: any
	id: any
	title: any
	slug: any
	tags: MultiSelectTags[]
	published: any
	created: string
	cover: any
	words: any
	reading_time: any
	references: any
}
export interface MultiSelectTags {
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

const getContent = (content: any) => {
	const text = content.rich_text.map((item: any) => {
		const annotations = getAnnotations(item.annotations)
		return { text: item.text.content, annotations: annotations }
	})

	return text
}

const getAnnotations = (annotations: any) => {
	const { bold, italic, strikethrough, underline, code } = annotations

	return { bold, italic, strikethrough, underline, code }
}

const getPageMetaData = (post: any) => {
	const getTags = (tags: Tags) => {
		const multiSelectTags = tags.multi_select
		// const allTags = multiSelectTags.map(tag => {
		// 	return tag.name
		// })

		return multiSelectTags
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
//set a return type for the funtion

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
		const c = getContent(p.content)

		return {
			...p,
			content: c,
		}
	})
}
