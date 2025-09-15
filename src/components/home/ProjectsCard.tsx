import React from 'react'
import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/types'

type Props = {
	projects: Project[] | null
}

export default function ProjectsCard({ projects }: Props) {
	const router = useRouter()
	const list = (projects ?? []).slice(0, 3)

	return (
		<div className='p-4 md:p-6 h-full flex flex-col'>
			<div className='flex items-center justify-between mb-3'>
				<motion.div
					animate={{ rotate: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<Code className='text-purple-400' size={20} />
				</motion.div>
				<motion.button
					whileHover={{ scale: 1.1, rotate: 45 }}
					className='text-gray-400 z-10 cursor-pointer hover:text-white'
					onClick={() => router.push('/projects')}
				>
					<ExternalLink size={16} />
				</motion.button>
			</div>

			<h3 className='font-medium text-sm mb-3'>Latest Projects</h3>

			<div className='flex-1 space-y-2 z-10'>
				{list.map(project => (
					<div
						key={project.id}
						className='p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-black/20 hover:scale-[1.02] hover:translate-x-1'
						onClick={() => router.push(`/projects/${project.name}`)}
					>
						<h4 className='text-xs font-medium text-gray-200 mb-1 line-clamp-1'>
							{project.name}
						</h4>
						<p className='text-xs text-gray-400 line-clamp-2'>
							{project.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
