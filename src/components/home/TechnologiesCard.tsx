import React from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/data/technologies'

const TechnologiesCard: React.FC = () => {
	return (
		<div className='p-4 md:p-6 h-full'>
			<h2 className='font-semibold mb-4'>Technologies</h2>
			<div className='flex flex-wrap gap-3'>
				{technologies.map(tech => {
					const Icon = tech.icon
					return (
						<motion.div
							key={tech.name}
							whileHover={{ y: -2, scale: 1.05 }}
							className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg 
                ${tech.bg_color} ${tech.text_color}
                border ${tech.border_color} transition-colors`}
						>
							<Icon size={14} />
							{tech.name}
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}

export default TechnologiesCard
