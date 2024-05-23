import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const PostLists = [
	{
		component: () => import('@/posts/1').then(module => module.default),
		date: '2021-10-01',
		id: '1',
		tags: ['tailwind', 'nextjs', 'graphql', 'edgedb'],
		title: 'A Look at CSS component fuckery in NEXTJS',
		cover: '/blog_placeholder.webp',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
		velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
		tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
		nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
		urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
		nunc id, aliquam nunc. Sed euismod, mauris id`,
		reading_time: '2m',
	},
	{
		component: () => import('@/posts/2').then(module => module.default),
		date: '2021-10-01',
		id: '2',
		tags: ['tailwind', 'nextjs', 'graphql', 'edgedb'],
		title: 'A Look at CSS fuckall logic',
		cover: '/blog_placeholder.webp',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
		velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
		tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
		nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
		urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
		nunc id, aliquam nunc. Sed euismod, mauris id`,
		reading_time: '2m',
	},
	{
		component: () => import('@/posts/3').then(module => module.default),
		date: '2021-10-01',
		id: '3',
		tags: ['tailwind', 'nextjs', 'graphql', 'edgedb'],

		title: 'A Look at this is garbage',
		cover: '/blog_placeholder.webp',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
		velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
		tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
		nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
		urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
		nunc id, aliquam nunc. Sed euismod, mauris id`,
		reading_time: '2m',
	},
	{
		component: () => import('@/posts/4').then(module => module.default),
		date: '2021-10-01',
		id: '3',
		tags: ['tailwind', 'nextjs', 'graphql', 'edgedb'],

		title: 'A Look at this is garbage',
		cover: '/blog_placeholder.webp',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
		velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
		tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
		nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
		urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
		nunc id, aliquam nunc. Sed euismod, mauris id`,
		reading_time: '2m',
	},
]
