type TagChipProps = {
	text: string
	color1?: string
	color2?: string
}

const fromColorClasses: { [key: string]: string } = {
	red: 'red-500',
	blue: 'blue-500',
	green: 'green-500',
	pink: 'pink-500',
	yellow: 'yellow-500',
	purple: 'purple-500',

	// Add more colors as needed
}
const toColorClasses: { [key: string]: string } = {
	red: 'red-600',
	blue: 'blue-600',
	green: 'green-600',
	pink: 'pink-600',
	yellow: 'yellow-600',
	purple: 'purple-600',

	// Add more colors as needed
}

export const TagChip: React.FC<TagChipProps> = ({ text, color1, color2 }) => {
	// const fromColor = fromColorClasses[color1]
	// const toColor = toColorClasses[color2]
	return (
		<div
			className={`inline-block select-none rounded-lg px-2 py-0.2 font-sans text-xs 
          font-bold uppercase  bg-[#595959]`}
		>
			<span className=''>{text}</span>
		</div>
	)
}
