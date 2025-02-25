import React from 'react'
import CustomBold from '../rough-notation/custom-bold'
import CustomLink from '../rough-notation/custom-links'
import Underline from './underline'
interface SubheadingProps {
	children: React.ReactNode
}
const Subheading: React.FC<SubheadingProps> = ({ children }) => {
	return (
		<div className='py-8'>
			{' '}
			<Underline
				underlineColor='#4242B6'
				animationDelay={300}
				animationDuration={2000}
			>
				<CustomBold fontSize='2xl'>{children} </CustomBold>
			</Underline>
		</div>
	)
}

export default Subheading
