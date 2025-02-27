import { Blocks, Globe, Terminal, Code, Cloud, Palette } from 'lucide-react'
import { Technology } from '@/utils/types'

export const technologies: Technology[] = [
	{
		name: 'React',
		icon: Blocks,
		bg_color: 'bg-black',
		border_color: 'border-red-500',
		text_color: 'text-red-400',
	},
	{
		name: 'Next.js',
		icon: Globe,
		bg_color: 'bg-black',
		border_color: 'border-purple-500',
		text_color: 'text-purple-400',
	},
	{
		name: 'Node.js',
		icon: Terminal,
		bg_color: 'bg-black',
		border_color: 'border-green-500',
		text_color: 'text-green-400',
	},
	{
		name: 'TypeScript',
		icon: Code,
		bg_color: 'bg-black',
		border_color: 'border-blue-500',
		text_color: 'text-blue-400',
	},
	{
		name: 'Coolify',
		icon: Cloud,
		bg_color: 'bg-black',
		border_color: 'border-gray-400',
		text_color: 'text-gray-300',
	},
	{
		name: 'Tailwind',
		icon: Palette,
		bg_color: 'bg-black',
		border_color: 'border-amber-500',
		text_color: 'text-amber-400',
	},
	{
		name: 'Python',
		icon: Code,
		bg_color: 'bg-black',
		border_color: 'border-pink-500',
		text_color: 'text-pink-400',
	},
]
