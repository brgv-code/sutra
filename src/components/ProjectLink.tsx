'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, AppWindow } from 'lucide-react'

interface ProjectLinkProps {
	githubUrl: string
	hostedUrl: string
	description: string
	otherLinks?: string[]
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
	githubUrl,
	hostedUrl,
	description,
	otherLinks,
}) => {
	return (
		<div>
			<div className='flex gap-4'>
				<motion.a
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors'
				>
					<Github />
				</motion.a>
				<motion.a
					href={hostedUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors'
				>
					<AppWindow />{' '}
				</motion.a>
				{otherLinks &&
					otherLinks.map((link, index) => (
						<motion.a
							key={index}
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors'
						>
							Link {index + 1}
						</motion.a>
					))}
			</div>
		</div>
	)
}

export default ProjectLink
