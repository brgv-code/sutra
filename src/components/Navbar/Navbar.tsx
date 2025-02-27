'use client'
import { memo, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Links from './links/Links'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ReadingProgressBar from 'react-progress-indicator-component'
const Navbar = memo(function Navbar() {
	const pathname = usePathname() || ''
	const router = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const isBlogOrProjectDetail =
		pathname.startsWith('/blog/') || pathname.startsWith('/projects/')

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isMenuOpen])

	if (pathname === '/') {
		return null
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const handleLinkClick = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className='fixed inset-0 bg-black/60 backdrop-blur-lg z-40'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					/>
				)}
			</AnimatePresence>

			<nav className='sticky top-0 z-50 md:bg-transparent sm:bg-black sm:w-[1/2] w-full sm:h-full backdrop-blur-sm'>
				<div className='flex justify-between py-4 px-4 sm:px-8 md:px-24 items-center'>
					<div className='hidden sm:block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
						<Links />
					</div>

					<button
						className='sm:hidden z-50'
						onClick={toggleMenu}
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					>
						{isMenuOpen ? <X size={24} color='white' /> : <Menu size={24} />}
					</button>
				</div>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className='w-full fixed inset-0 top-[56px] z-50 flex flex-col items-center pt-8'
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							<div className=' bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
								<Links onLinkClick={handleLinkClick} />
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{isBlogOrProjectDetail && (
					<ReadingProgressBar
						className='w-full'
						height={4}
						color='#FFDD00'
						useGradient={true}
						useGlow={true}
						showAfterScroll={100}
						glowIntensity={0.7}
						style={{ top: '56px' }}
					/>
				)}
			</nav>
		</>
	)
})

export default Navbar
