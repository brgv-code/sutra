import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import RotatingText from '../components/ui/rotating-text'
import { Toaster } from 'react-hot-toast'
const fira = Fira_Mono({
	weight: ['400', '500', '700'],
	subsets: ['latin-ext'],
})
//make this dynamic for page wise
//TODO: some analytics with splitbee
export const metadata: Metadata = {
	title: 'Bhargav | Portfolio',
	description: 'A portfolio website for Bhargav',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				<div className='flex relative flex-col h-100vh w-100vw justify-between '>
					{' '}
					<Navbar /> <Toaster position='top-right' />
					<div className='  flex justify-center relative align-start pb-12'>
						{children}
						{/* <span className='absolute  right-56 m-16 top-64'>
							Top Categories
						</span>{' '}
						<div className='absolute right-48 top-72 mt-16 '>
							<TopCategories />
						</div> */}
						<RotatingText
							text='Contact'
							repeat={3}
							divider={'.'}
							direction='counterclockwise'
						/>
					</div>
					{/* <div className='flex justify-center'>
						<Footer />
					</div> */}
				</div>

				{/* <div className=' circle fixed right-48 bottom-12 mt-16'>
					<div className='rounded-full'>
						Contact &nbsp;&nbsp;●&nbsp;&nbsp; Contact
					</div>
					<svg
						width='100'
						height='100'
						viewBox='0 0 100 100'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='50' cy='50' r='50' fill='black' />
						<text
							x='50%'
							y='50%'
							dy='.3em'
							textAnchor='middle'
							fill='white'
							fontSize='3em'
							fontFamily='Arial'
						>
							B
						</text>
					</svg>
				</div> */}
			</body>
		</html>
	)
}
