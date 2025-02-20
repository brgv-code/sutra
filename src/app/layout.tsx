import type { Metadata } from 'next'
import { Fira_Mono } from 'next/font/google'
import './globals.css'
import AnimatedGradient from '@/components/AnimatedGradient'
import Navbar from '@/components/Navbar/Navbar'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
const fira = Fira_Mono({
	weight: ['400', '500', '700'],
	subsets: ['latin-ext'],
})
//make this dynamic for page wise
//add dynamic icons for each page
//TODO: some analytics with splitbee
export const metadata: Metadata = {
	metadataBase: new URL('https://bhargav.dev/'),
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
			<body className={`${fira.className} `}>
				<AnimatedGradient />
				<Navbar />
				<main>{children}</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
