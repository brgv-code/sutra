import Image from 'next/image'
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
const textToLogo: { [key: string]: string } = {
	react: '/tags/react.svg',
	nextjs: '/tags/nextjsf.svg',
	tailwind: '/tags/tailwind.svg',
	graphql: '/tags/graphql.svg',
	edgedb: '/tags/edb_logo_green.svg',
	nestjs: '/tags/nestjs.svg',

}

export const TagChip: React.FC<TagChipProps> = ({ text, color1, color2 }) => {
	// const fromColor = fromColorClasses[color1]
	// const toColor = toColorClasses[color2]
	return (
		<div>
    {/* <span className='text-[7px]'>{text}</span>
			 */}
			<Image width={15} height={15} alt={text} className="opacity-50" src={textToLogo[text]} />
  </div>
	)
}
