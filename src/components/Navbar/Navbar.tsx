'use client'
import Links from './links/Links'

function Navbar() {
	return (
		<div className='flex  justify-between pt-5 px-24'>
			<div className=''>Logo </div>
			<div className=''>
				<Links />
			</div>
		</div>
	)
}
export default Navbar
