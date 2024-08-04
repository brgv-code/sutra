// components/NotionBlocks.tsx
import React from 'react'
import { BlockContent } from '../types'

const Paragraph: React.FC<{ content: string }> = ({ content }) => (
	<p className='mb-4'>{content}</p>
)

const Heading: React.FC<{ content: string; level: number }> = ({
	content,
	level,
}) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements
	return <Tag className='font-bold mb-2 mt-4'>{content}</Tag>
}

const Code: React.FC<{ content: string }> = ({ content }) => (
	<pre className='bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto'>
		<code>{content}</code>
	</pre>
)

const Callout: React.FC<{ content: string }> = ({ content }) => (
	<div className='bg-blue-100 border-l-4 border-blue-500 p-4 mb-4'>
		{content}
	</div>
)

const List: React.FC<{ content: string; ordered: boolean }> = ({
	content,
	ordered,
}) => {
	const ListTag = ordered ? 'ol' : 'ul'
	return (
		<ListTag className={`mb-4 ${ordered ? 'list-decimal' : 'list-disc'} ml-6`}>
			<li>{content}</li>
		</ListTag>
	)
}

export { Paragraph, Heading, Code, Callout, List }
