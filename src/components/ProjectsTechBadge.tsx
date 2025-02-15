'use client'
import { motion } from 'framer-motion'

export default function ProjectTechBadge({ tech }: { tech: string }) {
	return (
		<motion.span
			whileHover={{ scale: 1.05, y: -2 }}
			className='bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-md
        border border-white/5 shadow-lg hover:border-white/10 transition-colors'
		>
			{tech}
		</motion.span>
	)
}
