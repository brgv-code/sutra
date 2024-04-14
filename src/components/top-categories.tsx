import { TagChip } from './ui/tag-chip'

export const TopCategories = () => {
	const categories = [
		{ name: 'Technology', color1: 'blue', color2: 'blue' },
		{ name: 'Science', color1: 'green', color2: 'green' },
		{ name: 'Art', color1: 'red', color2: 'red' },
		{ name: 'Music', color1: 'yellow', color2: 'yellow' },
		{ name: 'Food', color1: 'pink', color2: 'pink' },
		{ name: 'Travel', color1: 'purple', color2: 'purple' },
	]
	return (
		<div className='grid grid-cols-3 gap-2'>
			{categories.map((category, index) => (
				<TagChip
					key={index}
					text={category.name}
					color1={category.color1}
					color2={category.color2}
				/>
			))}
		</div>
	)
}
