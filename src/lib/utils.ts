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
		tags: ['Tailwind', 'NextJS'],
		title: 'A Look at CSS component fuckery in NEXTJS',
		cover: '/berlin1.png',
		content: 'A look at this pathetic code',
		reading_time: '2m',
	},
]
