import React from 'react'
import CustomBold from '../rough-notation/custom-bold'
import CustomLink from '../rough-notation/custom-links'
import Underline from './underline'
interface HeadingProps {
	children: React.ReactNode
}
const Heading: React.FC<HeadingProps> = ({ children }) => {
	return (
		<div>
			{' '}
			<Underline>
				<CustomBold fontSize='4xl'>{children} </CustomBold>
			</Underline>
		</div>
	)
}

export default Heading
