'use client'
import { memo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Links from './links/Links'
import { Menu, X } from 'lucide-react'

const Navbar = memo(function Navbar() {
	const pathname = usePathname()
	const router = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	if (pathname === '/') {
		return null
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='sticky top-0 z-10 md:bg-transparent bg-black backdrop-blur-sm'>
			<div className='flex justify-between py-4 px-4 sm:px-8 md:px-24 items-center'>
				<button
					className='cursor-pointer hover:opacity-80 transition-opacity'
					onClick={() => router.push('/')}
					aria-label='Go to home'
				>
					Brgv
				</button>
				<div className='hidden sm:block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
					<Links />
				</div>
				<button
					className='sm:hidden'
					onClick={toggleMenu}
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{isMenuOpen && (
				<div className='sm:hidden w-full fixed inset-0 top-[56px] bg-black/95 backdrop-blur-md z-50 flex flex-col items-center pt-8'>
					<div className='bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
						<Links onLinkClick={() => setIsMenuOpen(false)} />
					</div>
				</div>
			)}
		</nav>
	)
})

export default Navbar
