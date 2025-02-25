import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BooksCard: React.FC = () => {
	const router = useRouter()

	return (
		<div className='p-4 md:p-6 h-full'>
			<div className='flex items-center justify-between mb-3'>
				<motion.div
					animate={{ rotateY: [0, 180, 360] }}
					transition={{ duration: 4, repeat: Infinity }}
				>
					<BookOpen className='text-blue-400' size={20} />
				</motion.div>

				<motion.button
					whileHover={{ scale: 1.1, rotate: 45 }}
					className='text-gray-400 cursor-pointer z-10 hover:text-white'
					onClick={() => router.push('/books')}
					style={{
						width: 'fit-content',
						height: 'fit-content',
					}}
				>
					<ExternalLink size={16} />
				</motion.button>
			</div>
			<h2 className='font-semibold mb-2'>Books</h2>
			<p className='text-sm text-gray-400'>The almanack by Naval</p>
		</div>
	)
}

export default BooksCard
