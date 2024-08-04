import { BlockContent } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const PostLists = [
	{
		component: () => import('@/posts/1').then(module => module.default),
		date: '2024-06-01',
		id: '1',
		tags: [''],
		title: 'Thoughts on new workflow tmux + neovim',
		cover: '/blog_placeholder.webp',
		reading_time: '4m',
		content: `Why I decided to move my workflow from VS Code to tmux + neovim. The factors contributing to this decision, initial thoughts on the new setup.
I have been using vs code for as long as i can remember. Even though there were a lot of IDEs on the market, i never changed VS code. because of the learning curve was small, it was quick to setup and make thigns running
in VS Code. But lately, It has become slow. Maybe because I use a lot of plugins, maybe it is the VS code which has become slower.`,
	},
	// 	{
	// 		component: () => import('@/posts/2').then(module => module.default),
	// 		date: '2021-10-01',
	// 		id: '2',
	// 		tags: ['tailwind', 'nextjs', 'graphql', 'edgedb'],
	// 		title: 'Thoughts on new workflow tmux + neovim',
	// 		cover: '/blog_placeholder.webp',
	// 		content: `Why I decided to move my workflow from VS Code to tmux + neovim. The factors contributing to this decision, initial thoughts on the new setup.
	// I have been using vs code for as long as i can remember. Even though there were a lot of IDEs on the market, i never changed VS code. because of the learning curve was small, it was quick to setup and make thigns running. I use a lot of plugins, maybe it is the VS code which has become slower`,
	// 		reading_time: '2m',
	// 	},
]

interface TextItem {
	type: string
	text: string
}

interface NotionBlock {
	type: string
	[key: string]: any
}
export function extractTextAndType(content: any): BlockContent[] {
	const blocks: BlockContent[] = []

	if (Array.isArray(content)) {
		content.forEach((block: any) => {
			if (block.type && block[block.type]) {
				const blockContent = block[block.type]
				if (blockContent.rich_text) {
					const text = blockContent.rich_text
						.map((t: any) => t.plain_text)
						.join('')
					blocks.push({ type: block.type, text })
				} else if (blockContent.text) {
					blocks.push({ type: block.type, text: blockContent.text })
				}
			}
		})
	}

	return blocks
}
