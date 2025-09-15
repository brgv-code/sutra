import React from 'react'
import { motion } from 'framer-motion'
import { Rss, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { BlogPostSummary } from '@/types'

export default function BlogCard({
	latestPosts,
}: {
	latestPosts: BlogPostSummary[]
}) {
	const router = useRouter()

	return (
		<div className='p-4 md:p-6 h-full flex flex-col'>
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

			<h3 className='font-medium text-sm mb-3'>Latest Posts</h3>

			<div className='flex-1 space-y-2 z-10'>
				{latestPosts.map(post => (
					<div
						key={post.slug}
						className='p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-black/20 hover:scale-[1.02] hover:translate-x-1'
						onClick={() => router.push(`/blog/${post.slug}`)}
					>
						<h4 className='text-xs font-medium text-gray-200 mb-1 line-clamp-1'>
							{post.title}
						</h4>
						<p className='text-xs text-gray-400 line-clamp-2'>
							{'Read more...'}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
