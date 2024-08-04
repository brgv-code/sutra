import NotionRenderer from '@/components/NotionRenderer'
import { getNotionData } from '@/lib/notion'
import { BlockContent } from '@/types'
import React from 'react'
// app/page.tsx
async function getNotionContent() {
	const notionData = await getNotionData()
	console.log('Notion Data:', notionData)

	// Flatten all blocks from all posts and filter out undefined values
	const allBlocks = notionData
		.flatMap(post => post.content)
		.filter((block): block is BlockContent => block !== undefined)
	console.log('All Blocks:', allBlocks)

	return { blocks: allBlocks }
}
export default async function Contact() {
	try {
		const notionContent = await getNotionContent()
		console.log('Notion Content:', notionContent)

		if (!notionContent.blocks || notionContent.blocks.length === 0) {
			return <div>No content available</div>
		}

		return (
			<div className='container mx-auto px-4 py-8'>
				<h1>Notion Content</h1>
				<NotionRenderer blocks={notionContent.blocks} />
			</div>
		)
	} catch (error) {
		console.error('Error fetching Notion content:', error)
		return <div>Error loading content</div>
	}
}
