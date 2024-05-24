'use client'
import { Menu } from 'lucide-react'
import Links from './links/Links'

function Navbar() {
	return (
		<div className='flex sticky right-0 z-10 justify-end pt-5 px-24 nav'>
			{/* <div className=''>
				{' '}
				<Menu />{' '}
			</div> */}
			<div className=''>
				<Links />
			</div>
		</div>
	)
}
export default Navbar
