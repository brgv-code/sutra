'use client'
import { Project } from '@/lib/github'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ProjectCard({ project }: { project: Project }) {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const springConfig = { damping: 25, stiffness: 150 }
	const smoothX = useSpring(mouseX, springConfig)
	const smoothY = useSpring(mouseY, springConfig)
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [mouseX, mouseY])

	const radialGradientPos = useTransform(
		[smoothX, smoothY],
		([x, y]) => `${x}px ${y}px`,
	)

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.2 }}
			className='relative group overflow-hidden border border-white/10 rounded-lg p-8 hover:bg-white/5 transition'
		>
			<motion.div
				className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
				style={{
					background: `radial-gradient(circle at ${radialGradientPos}, rgba(255,255,255,0.075) 0%, transparent 50%)`,
				}}
			/>
			<div className='relative z-10'>
				<h2 className='text-2xl font-semibold mb-4'>{project.name}</h2>
				<p className='text-gray-400 mb-6'>{project.description}</p>
				<div className='flex flex-wrap gap-2 mb-6'>
					{project.languages &&
						Object.keys(project.languages).map((tech, i) => (
							<motion.span
								key={i}
								whileHover={{ scale: 1.05, y: -2 }}
								className='bg-white/10 px-3 py-1 rounded-full text-sm'
							>
								{tech}
							</motion.span>
						))}
				</div>
				<Link
					href={`/projects/${project.name}`}
					className='text-white hover:text-gray-300 transition inline-flex items-center gap-2'
				>
					<motion.span
						whileHover={{ x: 5 }}
						className='flex items-center gap-1'
					>
						View Project
						<motion.span
							animate={{ x: [0, 5, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							→
						</motion.span>
					</motion.span>
				</Link>
			</div>
		</motion.div>
	)
}
