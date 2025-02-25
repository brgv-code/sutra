import React from 'react'
import { motion } from 'framer-motion'

const BackgroundEffect: React.FC = () => {
	return (
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
	)
}

export default BackgroundEffect
