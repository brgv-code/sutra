'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
	message: string
	icon: React.ReactNode
	color: string
}
const ToastNotification: React.FC<ToastProps> = ({ message, icon, color }) => {
	const baseColor = color.split('-')[1]

	return (
		<div className='fixed bottom-8 right-8 p-4 pointer-events-none z-[9999]'>
			<AnimatePresence>
				<motion.div
					key={message}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
					className={`pointer-events-auto min-w-[15rem] w-[15rem] rounded-2xl p-3 flex items-center gap-4 justify-center align-center shadow-lg text-white ${color}`}
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
						className={`w-6 h-6 flex-shrink-0 text-${baseColor}-500 `}
					>
						{icon}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className='text-sm text-white'
					>
						{message}
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default ToastNotification
