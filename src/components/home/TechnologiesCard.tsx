import React from 'react'
import { motion } from 'framer-motion'
import { technologies } from '../../../data/technologies'
import clsx from 'clsx'

interface TechStyle {
	bg: string
	border: string
	text: string
	glow: string
}

const TechnologiesCard: React.FC = () => {
	const techStyles: Record<string, TechStyle> = {
		React: {
			bg: 'bg-black',
			border: 'border-red-300',
			text: 'text-red-300/70',
			glow: 'shadow-[0_0_5px_rgba(239,68,68,0.1)]',
		},
		'Next.js': {
			bg: 'bg-black',
			border: 'border-purple-300',
			text: 'text-purple-300/70',
			glow: 'shadow-[0_0_5px_rgba(139,92,246,0.1)]',
		},
		'Node.js': {
			bg: 'bg-black',
			border: 'border-green-300',
			text: 'text-green-300/70',
			glow: 'shadow-[0_0_5px_rgba(16,185,129,0.1)]',
		},
		TypeScript: {
			bg: 'bg-black',
			border: 'border-blue-300',
			text: 'text-blue-300/70',
			glow: 'shadow-[0_0_5px_rgba(59,130,246,0.1)]',
		},
		Coolify: {
			bg: 'bg-black',
			border: 'border-gray-300',
			text: 'text-gray-300/70',
			glow: 'shadow-[0_0_5px_rgba(156,163,175,0.1)]',
		},
		Tailwind: {
			bg: 'bg-black',
			border: 'border-amber-300',
			text: 'text-amber-300/70',
			glow: 'shadow-[0_0_5px_rgba(245,158,11,0.1)]',
		},
		Python: {
			bg: 'bg-black',
			border: 'border-pink-300',
			text: 'text-pink-300/70',
			glow: 'shadow-[0_0_5px_rgba(236,72,153,0.1)]',
		},
	}

	return (
		<div className='p-4 md:p-6 h-full'>
			<h2 className='font-semibold mb-4'>Technologies</h2>
			<div className='flex flex-wrap gap-3'>
				{technologies.map(tech => {
					const Icon = tech.icon
					const style = techStyles[tech.name] || {
						bg: 'bg-black',
						border: 'border-gray-300',
						text: 'text-white/70',
						glow: '',
					}

					return (
						<motion.div
							key={tech.name}
							whileHover={{ y: -2, scale: 1.05 }}
							className={clsx(
								'flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border backdrop-blur-sm',
								style.bg,
								style.text,
								style.border,
								style.glow,
								'hover:brightness-110 transition-all duration-300',
							)}
						>
							<Icon size={14} className='mr-1 opacity-70' />
							{tech.name}
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}

export default TechnologiesCard
