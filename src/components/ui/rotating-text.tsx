import Image from 'next/image'

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

	const directionValue = direction === 'clockwise' ? 1 : -1
	if (directionValue === -1) repeatedText.reverse()
	return (
		<div className='relative'>
			<Image
				src={'/brgv_logo.png'}
				alt={''}
				sizes='100vw'
				width={0}
				height={0}
				className='rounded-full w-[6.2rem] h-[6.2rem]  fixed bg-black overflow-clip	bottom-10 border border-white/[0.5]
                right-10'
			/>
			<div
				className='circle '
				style={{ '--direction': directionValue } as React.CSSProperties}
			>
				{repeatedText.map((char, index) => (
					<span key={index}>{char}</span>
				))}
			</div>
		</div>
	)
}

export default RotatingText
