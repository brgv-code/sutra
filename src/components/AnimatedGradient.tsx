'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
type GradientEntry = {
	baseGradient: string
	animated: boolean
}
const gradientMap: Record<string, GradientEntry> = {
	'/': {
		baseGradient:
			'bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10',
		animated: true,
	},
	'/projects': {
		baseGradient:
			'bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10',
		animated: true,
	},

	'/projects/[slug]': {
		baseGradient:
			'bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10',
		animated: true,
	},
	'/blog': {
		baseGradient:
			'bg-gradient-to-br from-red-500/10 via-transparent to-cyan-500/10',
		animated: true,
	},
	'/blog/[slug]': {
		baseGradient:
			'bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10',
		animated: true,
	},
	'/about': {
		baseGradient:
			'bg-gradient-to-br from-magenta-500/10 via-transparent to-rose-500/10',
		animated: true,
	},
	'/contact': {
		baseGradient:
			'bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10',
		animated: true,
	},
	'/book': {
		baseGradient:
			'bg-gradient-to-br from-red-500/10 via-transparent to-purple-500/10',
		animated: true,
	},
}

export default function AnimatedGradient() {
	const pathname = usePathname()
	const gradientKey = Object.keys(gradientMap).find(path => {
		if (path.includes('[slug]')) {
			const pattern = path.replace('[slug]', '.*')
			return new RegExp(`^${pattern}$`).test(pathname)
		}
		return path === pathname
	})
	const { baseGradient, animated } = gradientMap[gradientKey || '/']

	return (
		<div className='fixed inset-0'>
			<div className={`absolute inset-0 ${baseGradient}`} />
			{animated && (
				<motion.div
					animate={{
						backgroundPosition: ['0% 0%', '100% 100%'],
						opacity: [0.5, 0.4, 0.3],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
					className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent)] bg-[length:400%_400%]'
				/>
			)}
		</div>
	)
}
