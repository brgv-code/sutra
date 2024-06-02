import { Contact } from '@/lib/contact'
import Image from 'next/image'
import ContactCard from './contact-card'

export interface RotatingTextProps {
	text: string
	repeat: number
	divider: string
	direction: 'clockwise' | 'counterclockwise'
}

const RotatingText: React.FC<RotatingTextProps> = ({
	text,
	repeat,
	divider,
	direction,
}) => {
	const splitText = text.split('')
	const repeatedText = Array(repeat)
		.fill([...splitText, divider])
		.flat()
	//make the size and positiong of the circle dynamic
	const directionValue = direction === 'clockwise' ? 1 : -1
	if (directionValue === -1) repeatedText.reverse()
	return (
		<div className='relative group '>
			<Image
				src={'/brgv_logo.png'}
				alt={''}
				sizes='100vw'
				width={0}
				height={0}
				className='rounded-full  w-[6.2rem] h-[6.2rem] fixed bg-black overflow-clip bottom-10 border border-white/[0.5] right-10 '
			/>
			<div
				className='circle '
				style={{ '--direction': directionValue } as React.CSSProperties}
			>
				{repeatedText.map((char, index) => (
					<span key={index}>{char}</span>
				))}
			</div>

			<div className='invisible contact  group-hover:visible w-64 h-[70vh] transition duration-300 ease-in-out fixed hover:cursor-pointer  mt-16 mr-12 right-10 top-0 b-contact   p-2 rounded shadow text-sm'>
				<ContactCard />
			</div>
		</div>
	)
}

export default RotatingText
