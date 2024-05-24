import Link from 'next/link'

interface CustomLinkProps {
	text: string
	url: string
	gradientColors?: string[]
	decoration?: boolean
}
const CustomLink: React.FC<CustomLinkProps> = ({
	text,
	url,
	gradientColors,
	decoration = true,
}) => {
	const defaultGradientColors = ['#1b7783', '#1e8d50']
	const colors = gradientColors || defaultGradientColors
	const gradientStyle = {
		background: `linear-gradient(to right, ${colors.join(', ')})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		borderRadius: '10px',
		lineHeight: 'normal',
		underline: decoration ? 'underline' : 'none',
	}
	return (
		<Link
			className={`text-lg mx-2  text-transparent bg-clip-text  italic  `}
			style={gradientStyle}
			href={url}
			target='_blank'
		>
			{text}
		</Link>
	)
}
export default CustomLink
