import React from 'react'
import { motion } from 'framer-motion'
import { Rss, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BlogCard: React.FC = () => {
	const router = useRouter()

	return (
		<div className='p-4 md:p-6 h-full'>
			<div className='flex items-center justify-between mb-3'>
				<motion.div
					animate={{ opacity: [1, 0, 1] }}
					transition={{ duration: 8, repeat: Infinity }}
				>
					<Rss className='text-blue-400' size={20} />
				</motion.div>
				<motion.button
					whileHover={{ scale: 1.1, rotate: 45 }}
					className='text-gray-400 cursor-pointer z-10 hover:text-white'
					onClick={() => router.push('/blog')}
				>
					<ExternalLink size={16} />
				</motion.button>
			</div>
			<h3 className='font-medium text-sm mb-2'>Latest Post</h3>
			<p className='text-xs text-gray-400'>
				Building Modern Web Applications with Next.js
			</p>
		</div>
	)
}

export default BlogCard
