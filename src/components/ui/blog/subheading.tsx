import React from 'react'
import CustomBold from '../custom-bold'
import CustomLink from '../custom-links'
import Underline from './underline'
interface SubheadingProps {
	children: React.ReactNode
}
const Subheading: React.FC<SubheadingProps> = ({ children }) => {
	return (
		<div className='py-8'>
			{' '}
			<Underline underlineColor='#4242B6'>
				<CustomBold fontSize='2xl'>{children} </CustomBold>
			</Underline>
		</div>
	)
}

export default Subheading
