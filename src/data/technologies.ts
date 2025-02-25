import { Blocks, Globe, Terminal, Code, Cloud, Palette } from 'lucide-react'
import { Technology } from '@/utils/types'

export const technologies: Technology[] = [
	{
		name: 'React',
		icon: Blocks,
		bg_color: 'bg-red-400/[10%]',
		border_color: 'border-red-400/[10%]',
		text_color: 'text-red-500/[80%]',
	},
	{
		name: 'Next.js',
		icon: Globe,
		bg_color: 'bg-purple-400/[10%]',
		border_color: 'border-purple-400/[10%]',
		text_color: 'text-purple-500/[80%]',
	},
	{
		name: 'Node.js',
		icon: Terminal,
		bg_color: 'bg-green-400/[10%]',
		border_color: 'border-green-400/[10%]',
		text_color: 'text-green-500/[80%]',
	},
	{
		name: 'TypeScript',
		icon: Code,
		bg_color: 'bg-blue-400/[10%]',
		border_color: 'border-blue-400/[10%]',
		text_color: 'text-blue-500/[80%]',
	},
	{
		name: 'Coolify',
		icon: Cloud,
		bg_color: 'bg-stone-400/[10%]',
		border_color: 'border-stone-400/[10%]',
		text_color: 'text-stone-500/[80%]',
	},
	{
		name: 'Tailwind',
		icon: Palette,
		bg_color: 'bg-amber-400/[10%]',
		border_color: 'border-amber-400/[10%]',
		text_color: 'text-amber-500/[80%]',
	},
	{
		name: 'Python',
		icon: Code,
		bg_color: 'bg-pink-400/[10%]',
		border_color: 'border-pink-400/[10%]',
		text_color: 'text-pink-500/[80%]',
	},
]
