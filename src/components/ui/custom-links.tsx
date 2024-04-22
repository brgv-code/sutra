import Link from 'next/link'

interface CustomLinkProps {
	text: string
	url: string
}
const CustomLink: React.FC<CustomLinkProps> = ({ text, url }) => {
	return (
		<Link
			className='underline italic  decoration-green-700 decoration-4 underline-offset-4  text-lg mx-2 bg-gradient-to-r from-[#1b7783] to-[#1e8d50] text-transparent bg-clip-text'
			href={url}
			target='_blank'
		>
			{text}
		</Link>
	)
}
export default CustomLink
