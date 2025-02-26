export default function Loading() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-black/20'>
			<div className='relative w-24 h-24'>
				<div className='absolute inset-0 border-t-4 border-emerald-400 rounded-full animate-spin'></div>
				<div className='absolute inset-2 border-r-4 border-blue-400 rounded-full animate-spin-reverse'></div>
				<div className='absolute inset-4 border-b-4 border-purple-400 rounded-full animate-spin'></div>
			</div>
		</div>
	)
}
