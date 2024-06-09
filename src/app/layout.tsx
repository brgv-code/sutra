import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import RotatingText from '../components/ui/rotating-text'
import { Toaster } from 'react-hot-toast'
import Footer from './footer'
const fira = Fira_Mono({
	weight: ['400', '500', '700'],
	subsets: ['latin-ext'],
})
//make this dynamic for page wise
//add dynamic icons for each page
//TODO: some analytics with splitbee
export const metadata: Metadata = {
	title: {
		default: 'Sutra | Portfolio',
		template: '%s | Sutra ',
	},
	description:
		'A portfolio website for Bhargav. Software developer based in Berlin,Germany.',
	twitter: {
		card: 'summary_large_image',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				<div className='flex relative flex-col   justify-between '>
					{' '}
					<Navbar />
					{/* <Toaster position='top-right' /> */}
					<div className=' flex justify-center relative align-start pb-12'>
						{children}
					</div>
					<div className='hidden md:block'>
						<RotatingText
							text='Contact'
							repeat={3}
							divider={'.'}
							direction='counterclockwise'
						/>
					</div>
					<div className=' absolute  bottom-0 flex self-center'>
						<Footer />
					</div>
				</div>

				<div className='noise'></div>
			</body>
		</html>
	)
}
