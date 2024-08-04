import React from 'react'
import { BlockContent } from '../types'

const NotionRenderer: React.FC<{ blocks: BlockContent[] }> = ({ blocks }) => {
	const renderBlock = (block: BlockContent) => {
		switch (block.type) {
			case 'paragraph':
				return <p>{block.text}</p>
			case 'heading_1':
				return <h1>{block.text}</h1>
			case 'heading_2':
				return <h2>{block.text}</h2>
			case 'heading_3':
				return <h3>{block.text}</h3>
			// Add more cases as needed
			default:
				return <p>Unsupported block type: {block.type}</p>
		}
	}

	return (
		<div>
			{blocks.map((block, index) => (
				<React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
			))}
		</div>
	)
}

export default NotionRenderer
