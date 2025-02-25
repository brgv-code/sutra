import React from 'react'
import { motion } from 'framer-motion'
import { Code, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { latestProjects } from '@/data/projects'

const ProjectsCard: React.FC = () => {
	const router = useRouter()

	return (
		<div className='p-4 md:p-6 h-full flex flex-col'>
			<div className='flex items-center justify-between mb-4'>
				<div className='flex items-center gap-2'>
					<motion.div
						animate={{ rotate: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<Code className='text-purple-400' size={20} />
					</motion.div>
					<h2 className='font-semibold'>Latest Projects</h2>
				</div>
				<motion.button
					whileHover={{ x: 5 }}
					className='flex items-center gap-1 text-sm text-gray-400 hover:text-white group'
					onClick={() => router.push('/projects')}
				>
					View all
					<motion.div
						animate={{ x: [0, 5, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<ArrowRight size={16} />
					</motion.div>
				</motion.button>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				{latestProjects.map(project => (
					<motion.div
						key={project.title}
						whileHover={{ scale: 1.02 }}
						className='p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/20 transition-all duration-300'
					>
						<h3 className='text-sm font-medium mb-1'>{project.title}</h3>
						<p className='text-xs text-gray-400'>{project.tech}</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default ProjectsCard
