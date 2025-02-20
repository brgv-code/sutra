'use client'
import { Menu } from 'lucide-react'
import Links from './links/Links'
import { usePathname, useRouter } from 'next/navigation';

function Navbar() {	
	const pathname = usePathname()
	const router = useRouter()
    if (pathname === '/') {
        return null; 
    }
	return (
		<div className='flex sticky  z-10 justify-between pt-5 px-24 nav 	'>
			<div className='cursor-pointer' onClick={() => router.push('/')}>
				Brgv
			</div>
			<div className='bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
				<Links />
			</div>
		</div>
	)
}
export default Navbar
