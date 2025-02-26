import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Highlight from '@/components/ui/blog/highlight'
import CustomLink from '@/components/ui/rough-notation/custom-links'
import { socialLinks } from '../../../data/socialLinks'

const HeroCard: React.FC = () => {
	const router = useRouter()

	return (
		<div className='h-full p-4 md:p-8 flex flex-col justify-between relative'>
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
						<Sparkles className='text-green-400' size={20} />
					</motion.div>
					<span className='text-green-400 text-sm'>Available for work</span>
				</motion.div>

				<h1 className='text-3xl md:text-5xl font-bold mb-4 relative'>
					<span className='bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
						Bhargav{' '}
					</span>
				</h1>

				<div className='text-gray-400 text-base md:text-lg relative mt-8 md:mt-12'>
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
					<motion.button
						whileHover={{ x: 5 }}
						className='flex items-center gap-1 text-sm text-gray-400 hover:text-white group'
						onClick={() => router.push('/about')}
					>
						Read more
						<motion.div
							animate={{ x: [0, 5, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<ArrowRight size={16} />
						</motion.div>
					</motion.button>
				</div>
			</div>

			<div className='flex gap-4 mt-4 md:mt-0'>
				{socialLinks.map((link, index) => (
					<motion.a
						key={index}
						href={link.url}
						whileHover={{ scale: 1.1, y: -2 }}
						whileTap={{ scale: 0.95 }}
						className='p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors'
						aria-label={link.label}
						target='_blank'
						rel='noopener noreferrer'
					>
						<link.icon size={20} />
					</motion.a>
				))}
			</div>
		</div>
	)
}

export default HeroCard
