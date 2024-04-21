import { Link } from 'lucide-react'

interface CustomLinkProps {
	children: React.ReactNode
	text: string
	url: string
}
const CustomLink: React.FC<CustomLinkProps> = ({ children, text, url }) => {
	return <Link href={url}>{text}</Link>
}
export default CustomLink
