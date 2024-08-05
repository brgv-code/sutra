import 'server-only'
import { Client } from '@notionhq/client'
import { extractTextAndType } from './utils'
import { BlockContent } from '@/types'
import { cache } from 'react'
import {
	BlockObjectResponse,
	LinkToPageBlockObjectResponse,
	PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const notion = new Client({
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
export const getPages = cache(() => {
	return notion.databases.query({
		filter: {
			property: 'Published',
			select: {
				equals: 'Yes',
			},
		},
		database_id: process.env.DATABASE_ID!,
	})
})

type RelatedContent = BlockObjectResponse[]

interface EnhancedPageContent extends PageObjectResponse {
	blocks: BlockObjectResponse[]
	relatedContent: RelatedContent
}

export const getRelatedPageContent = cache(
	async (pageId: string): Promise<RelatedContent> => {
		const response = await notion.blocks.children.list({ block_id: pageId })
		return response.results as BlockObjectResponse[]
	},
)

export const getPageContent = cache(
	async (pageId: string): Promise<EnhancedPageContent> => {
		const page = (await notion.pages.retrieve({
			page_id: pageId,
		})) as PageObjectResponse
		const blocksResponse = await notion.blocks.children.list({
			block_id: pageId,
		})
		const blocks = blocksResponse.results as BlockObjectResponse[]
		let relatedContent: RelatedContent = []

		if (
			'Content' in page.properties &&
			page.properties.Content.type === 'relation'
		) {
			const relatedPageId = page.properties.Content.relation[0]?.id
			if (relatedPageId) {
				relatedContent = await getRelatedPageContent(relatedPageId)
			}
		}

		return {
			...page,
			blocks,
			relatedContent,
		}
	},
)

export const getPageBySlug = cache((slug: string) => {
	return notion.databases
		.query({
			database_id: process.env.DATABASE_ID!,
			filter: {
				property: 'Slug',
				rich_text: {
					equals: slug,
				},
			},
		})
		.then(res => res.results[0] as PageObjectResponse | undefined)
})
