import Image from 'next/image'
const RotatingText = () => {
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
			<div className='circle '>
				<span>C</span>
				<span>o</span>
				<span>n</span>
				<span>t</span>
				<span>a</span>
				<span>c</span>
				<span>t</span>
				<span>.</span>
				<span>C</span>
				<span>o</span>
				<span>n</span>
				<span>t</span>
				<span>a</span>
				<span>c</span>
				<span>t</span>
				<span>.</span>
				<span>C</span>
				<span>o</span>
				<span>n</span>
				<span>t</span>
				<span>a</span>
				<span>c</span>
				<span>t</span>
			</div>
		</div>
	)
}
export default RotatingText
