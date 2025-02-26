'use client'
import { memo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Links from './links/Links'

const Navbar = memo(function Navbar() {
	const pathname = usePathname()
	const router = useRouter()

	if (pathname === '/') {
		return null
	}

	return (
		<nav className='sticky top-0 z-10 flex justify-between pt-5 px-24'>
			<button
				className='cursor-pointer hover:opacity-80 transition-opacity'
				onClick={() => router.push('/')}
				aria-label='Go to home'
			>
				Brgv
			</button>
			<div className='bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
				<Links />
			</div>
		</nav>
	)
})

export default Navbar
