import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { BentoCardProps } from '@/utils/types'
import { HomeContext } from '../../context/HomeContext'

const BentoCard: React.FC<BentoCardProps> = ({
	children,
	className = '',
	colspan = 1,
	rowspan = 1,
	onHover,
	gradient = false,
	onClick,
}) => {
	const { radialGradientPos, setHoveredCard } = useContext(HomeContext)

	return (
		<motion.div
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
        rounded-3xl 
        backdrop-blur-xl border border-gray-900/50
        hover:border-gray-700 transition-all duration-300
        ${gradient ? 'sm:hover:bg-gradient-to-br sm:hover:from-black/[20%] sm:hover:to-gray-900/[40%]' : ''}
        ${className}
        ${colspan > 1 ? `sm:col-span-${colspan} col-span-full` : ''}
        ${rowspan > 1 ? `sm:row-span-${rowspan}` : ''}
      `}
		>
			<motion.div
				className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block'
				style={{
					background: `radial-gradient(circle at ${radialGradientPos}, rgba(255,255,255,0.075) 0%, transparent 50%)`,
				}}
				onClick={onClick}
			/>
			{children}
		</motion.div>
	)
}

export default BentoCard
