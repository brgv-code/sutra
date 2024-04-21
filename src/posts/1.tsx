import React from 'react'
import CustomBold from '@/components/ui/custom-bold'

export const PostNumber1: React.FC = () => {
	return (
		<div className='container mx-auto'>
			<h1 className='text-4xl font-bold mb-4'>My Blog Post</h1>
			<p className='mb-4'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
				velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
				tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
				nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
				urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
				nunc id, aliquam nunc. Sed euismod, mauris id
				<br />
				<CustomBold>bold text</CustomBold>
				{/* <CustomItalic>italic text</CustomItalic>
				<CustomUnderline>underlined text</CustomUnderline>
				<CustomFontStyle>styled text</CustomFontStyle>
				<CustomTextGradient>text with gradient</CustomTextGradient> */}
				tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc lectus
				nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit tincidunt
				urna, quis lacinia neque nunc ac nunc. Sed nec nunc consectetur, aliquet
				nunc id, aliquam nunc. Sed euismod, mauris id tincidunt aliquam, elit
				nunc tincidunt nunc, vitae tincidunt nunc lectus nec nunc. Sed auctor,
				nunc at efficitur ultrices, nunc elit
			</p>
		</div>
	)
}
