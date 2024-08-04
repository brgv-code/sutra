import { Client } from '@notionhq/client'
import { extractTextAndType } from './utils'
import { BlockContent } from '@/types'

const notion = new Client({
	auth: process.env.NOTION_CMS,
})

export interface Tags {
	id: string
	name: string
	multi_select: MultiSelectTags[]
}

export interface Content {
	id: string
	type: string
	relation: [{ id: string }]
	has_more: boolean
}

export interface Notion_Data {
	content: Content
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
	blog_page: any
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

// const getContent = (content: any) => {
// 	const text = content.rich_text.map((item: any) => {
// 		const annotations = getAnnotations(item.annotations)
// 		return { text: item.text.intro, annotations: annotations }
// 	})

// 	return text
// }

const getContent = async (content: Content): Promise<BlockContent[]> => {
	if (!content.relation[0]?.id) return []
	const text = await notion.blocks.children.list({
		block_id: content.relation[0].id,
	})
	const n = extractTextAndType(text)
	return n
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
		intro: post.properties.Intro,
	}
}
//set a return type for the function

// export const getNotionData = async () => {
// 	const databaseId = process.env.DATABASE_ID || ''

// 	const posts = await notion.databases.query({
// 		database_id: databaseId,

// 		sorts: [
// 			{
// 				property: 'Created',
// 				direction: 'descending',
// 			},
// 		],
// 	})

// 	const allPosts = posts.results

// 	return allPosts.map(async post => {
// 		const p = getPageMetaData(post)
// 		// console.log(p, 'content')
// 		const c = getContent(p.content)

// 		return {
// 			...p,
// 			content: c,
// 		}
// 	})
// }
export const getNotionData = async () => {
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

	const processedPosts = await Promise.all(
		allPosts.map(async post => {
			const p = getPageMetaData(post)
			const c = await getContent(p.content)
			return {
				...p,
				content: c,
			}
		}),
	)

	return processedPosts
}
