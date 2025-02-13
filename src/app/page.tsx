'use client'

import React, {
	useState,
	useEffect,
	ReactNode,
	useMemo,
	useCallback,
} from 'react'
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import {
	Github,
	Twitter,
	Linkedin,
	Mail,
	ArrowRight,
	BookOpen,
	Code,
	User,
	ExternalLink,
	Star,
	Sparkles,
	Coffee,
	Globe,
	Terminal,
	Blocks,
	Cloud,
	Palette,
} from 'lucide-react'
import Highlight from '@/components/ui/blog/highlight'

import Link from 'next/link'
import CustomLink from '@/components/ui/custom-links'
import { useRouter } from 'next/navigation'

const Home = () => {
	const [hoveredCard, setHoveredCard] = useState<string | null>(null)
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const springConfig = { damping: 25, stiffness: 150 }
	const smoothX = useSpring(mouseX, springConfig)
	const smoothY = useSpring(mouseY, springConfig)
	const router = useRouter()

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	const radialGradientPos = useTransform(
		[smoothX, smoothY],
		([x, y]) => `${x}px ${y}px`,
	)

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.06 },
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95, y: 20 },
		show: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 20,
			},
		},
	}
	const handleHover = useCallback(
		(cardName: string) => () => {
			setHoveredCard(cardName)
		},
		[],
	)
	const technologies = [
		{
			name: 'React',
			icon: Blocks,
			bg_color: 'bg-red-400/[10%]',
			border_color: 'border-red-400/[10%]',
			text_color: 'text-red-900',
		},
		{
			name: 'Next.js',
			icon: Globe,
			bg_color: 'bg-purple-400/[10%]',
			border_color: 'border-purple-400/[10%]',
			text_color: 'text-purple-900',
		},
		{
			name: 'Node.js',
			icon: Terminal,
			bg_color: 'bg-green-400/[10%]',
			border_color: 'border-green-400/[10%]',
			text_color: 'text-green-900',
		},
		{
			name: 'TypeScript',
			icon: Code,
			bg_color: 'bg-blue-400/[10%]',
			border_color: 'border-blue-400/[10%]',
			text_color: 'text-blue-900',
		},
		{
			name: 'AWS',
			icon: Cloud,
			bg_color: 'bg-orange-400/[10%]',
			border_color: 'border-orange-400/[10%]',
			text_color: 'text-orange-900',
		},
		{
			name: 'Tailwind',
			icon: Palette,
			bg_color: 'bg-sky-400/[10%]',
			border_color: 'border-sky-400/[10%]',
			text_color: 'text-sky-900',
		},
		{
			name: 'Python',
			icon: Code,
			bg_color: 'bg-yellow-400/[10%]',
			border_color: 'border-yellow-400/[10%]',
			text_color: 'text-yellow-900',
		},
	]

	const socialLinks = [
		{ icon: Github, url: 'https://github.com/brgv-code/', label: 'GitHub' },
		{ icon: Twitter, url: 'https://x.com/brgv_dev', label: 'Twitter' },
		{
			icon: Linkedin,
			url: 'https://www.linkedin.com/in/bhargavbrgv/',
			label: 'LinkedIn',
		},
		{ icon: Mail, url: 'mailto:hello@brgv.dev', label: 'Email' },
	]

	const BentoCard = React.memo(
		({
			children,
			className = '',
			colspan = 1,
			rowspan = 1,
			onHover,
			gradient,
			onClick,
		}: {
			children: ReactNode
			className?: string
			colspan?: number
			rowspan?: number
			onHover?: () => void
			gradient?: boolean
			onClick?: () => void
		}) => (
			<motion.div
				// variants={cardVariants}
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.2 },
				}}
				onHoverStart={() => {
					if (typeof onHover === 'function') {
						const result = onHover()
						setHoveredCard(result !== undefined ? result : null)
					}
				}}
				onHoverEnd={() => setHoveredCard(null)}
				className={`
        relative overflow-hidden group
        rounded-3xl bg-grey-100
        backdrop-blur-xl border border-gray-900/50
        hover:border-gray-700 transition-all duration-300
        ${gradient ? 'hover:bg-gradient-to-br hover:from-black/[20%] hover:to-gray-900/[40%]' : ''}
        ${className}
        ${colspan > 1 ? `col-span-${colspan}` : ''}
        ${rowspan > 1 ? `row-span-${rowspan}` : ''}
      `}
			>
				<motion.div
					className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
					style={{
						background: `radial-gradient(circle at ${radialGradientPos}, rgba(255,255,255,0.075) 0%, transparent 50%)`,
					}}
					onClick={onClick}
				/>
				{children}
			</motion.div>
		),
	)

	// const FloatingIcon = ({
	// 	icon: Icon,
	// 	delay = 0,
	// }: {
	// 	icon: React.ElementType
	// 	delay?: number
	// }) => (
	// 	<motion.div
	// 		initial={{ opacity: 0, y: 20 }}
	// 		animate={{ opacity: 1, y: 0 }}
	// 		transition={{ delay }}
	// 		className='absolute'
	// 		style={{
	// 			top: `${Math.random() * 80 + 10}%`,
	// 			left: `${Math.random() * 80 + 10}%`,
	// 		}}
	// 	>
	// 		<Icon size={16} className='text-gray-600' />
	// 	</motion.div>
	// )
	const iconPositions = useMemo(
		() => [
			{ top: 15, left: 85 },
			{ top: 45, left: 75 },
			{ top: 25, left: 90 },
		],
		[],
	)

	return (
		<div className='min-h-screen mt-[5%] text-white overflow-hidden p-6'>
			<div className='fixed inset-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10' />
				<motion.div
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent)] bg-[length:400%_400%]'
				/>
			</div>

			<motion.div
				// variants={containerVariants}
				initial='hidden'
				animate='show'
				className='relative max-w-7xl mx-auto'
			>
				{/* Main grid */}
				<div className='grid grid-cols-4 gap-4 grid-auto-rows-[200px]'>
					{/* Hero Card - 2x2 */}
					<BentoCard
						colspan={2}
						className=' row-end-5 row-start-1 '
						onHover={handleHover('hero')}
						gradient
					>
						<div className='h-full p-8 flex flex-col justify-between relative'>
							<div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className='flex items-center gap-2 mb-4'
								>
									<motion.div
										animate={{ rotate: [0, 360] }}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: 'linear',
										}}
									>
										<Sparkles className='text-yellow-400' size={20} />
									</motion.div>
									<span className='text-yellow-400 text-sm'>
										Available for work
									</span>
								</motion.div>

								<h1 className='text-5xl font-bold mb-4 relative'>
									<span className='bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
										Bhargav{' '}
									</span>
									<motion.span
										className='absolute -top-6 -right-6 text-xs text-gray-500'
										animate={{ y: [0, -5, 0] }}
										transition={{ duration: 2, repeat: Infinity }}
									>
										Developer
									</motion.span>
								</h1>

								<div className='text-gray-400 text-lg relative mt-12'>
									<div className='mb-4 md:text-start items-center'>
										Product focused developer. Bringing{' '}
										<Link href='about'>
											<Highlight>Loura</Highlight>
										</Link>{' '}
										to life{' '}
										<span className='whitespace-nowrap'>
											@
											<CustomLink href='https://www.foundamental.com/people/bhargav-babu'>
												Foundamental
											</CustomLink>
										</span>{' '}
										Ready to code, connect, and create something amazing!
									</div>
								</div>
							</div>

							<div className='flex gap-4'>
								{socialLinks.map((link, index) => (
									<motion.a
										key={index}
										href={link.url}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className='p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors'
										aria-label={link.label}
										target='_blank'
									>
										<link.icon size={20} />
									</motion.a>
								))}
							</div>
						</div>
					</BentoCard>

					<BentoCard onHover={handleHover('projects')} gradient>
						<div className='p-6 h-full flex flex-col'>
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

							<div className='grid grid-cols-2 gap-4'>
								{[
									{ title: 'AI Analytics', tech: 'Next.js · TS' },
									{ title: 'Blockchain App', tech: 'React · Web3' },
								].map((project, index) => (
									<motion.div
										key={project.title}
										whileHover={{ scale: 1.02 }}
										className='p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/20 transition-all duration-300'
									>
										<h3 className='text-sm font-medium mb-1'>
											{project.title}
										</h3>
										<p className='text-xs text-gray-400'>{project.tech}</p>
									</motion.div>
								))}
							</div>
						</div>
					</BentoCard>

					{/* Tech Stack - 2x1 */}
					<BentoCard onHover={handleHover('tech')} gradient>
						<div className='p-6 h-full'>
							<h2 className='font-semibold mb-4'>Technologies</h2>
							<div className='flex flex-wrap gap-3'>
								{technologies.map(tech => {
									const Icon = tech.icon
									return (
										<motion.div
											key={tech.name}
											whileHover={{ y: -2, scale: 1.05 }}
											className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg 
                      ${tech.bg_color}  ${tech.text_color}
                      border ${tech.border_color} transition-colors`}
										>
											<Icon size={14} />
											{tech.name}
										</motion.div>
									)
								})}
							</div>
						</div>
					</BentoCard>

					{/* Blog Card */}
					<BentoCard
						onHover={handleHover('blog')}
						gradient
						className='col-start-3 row-start-2 row-end-5'
					>
						<div className='p-6 h-full'>
							<div className='flex items-center justify-between mb-3'>
								<motion.div
									animate={{ rotateY: [0, 180, 360] }}
									transition={{ duration: 4, repeat: Infinity }}
								>
									<BookOpen className='text-blue-400' size={20} />
								</motion.div>
								<motion.button
									whileHover={{ scale: 1.1, rotate: 45 }}
									className='text-gray-400 hover:text-white'
								>
									<ExternalLink size={16} />
								</motion.button>
							</div>
							<h3 className='font-medium text-sm mb-2'>Latest Post</h3>
							<p className='text-xs text-gray-400'>
								The Future of Web Development in 2025
							</p>
						</div>
					</BentoCard>

					{/* About Card */}

					<BentoCard
						onHover={handleHover('about')}
						gradient
						className='col-start-4 row-start-2 row-end-5 cursor-pointer'
						onClick={() => router.push('/about')}
					>
						<div className='p-6 h-full '>
							<div className='flex  items-center justify-between mb-3'>
								<User className='text-emerald-400' size={20} />
								<motion.div
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
								>
									<Star className='text-yellow-400' size={16} />
								</motion.div>
							</div>
							<h2 className='font-semibold mb-2'>About</h2>
							<p className='text-sm text-gray-400'>
								Passionate developer with 5+ years of experience
							</p>
						</div>
					</BentoCard>
				</div>
			</motion.div>
		</div>
	)
}

export default Home
