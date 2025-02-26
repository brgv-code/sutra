'use client'
import { AnimatePresence, motion } from 'framer-motion'
const variants = {
	hidden: { opacity: 0, filter: 'blur(10px)' },
	glow: { filter: 'brightness(1.5)', transition: { duration: 0.75 } },
	fadeOut: { opacity: 0, transition: { duration: 0.5 } },
	enter: {
		opacity: 1,
		filter: 'brightness(1)',
		transition: { duration: 0.75 },
	},
}
const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial='hidden'
				animate='enter'
				variants={variants}
				exit='glow'
				className='flex min-h-screen justify-center w-full motion-div'
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default Template
