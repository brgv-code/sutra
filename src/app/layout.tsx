import type { Metadata } from 'next'
import dynamicImport from 'next/dynamic'
import { Fira_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ToastProvider } from '@/context/ToastContext'
import './globals.css'

const AnimatedGradient = dynamicImport(
	() => import('@/components/AnimatedGradient'),
	{
		ssr: false,
		loading: () => <div className='fixed inset-0 bg-black/20' />,
	},
)

const Navbar = dynamicImport(() => import('@/components/Navbar/Navbar'), {
	ssr: false,
})

const fira = Fira_Mono({
	weight: ['400', '500', '700'],
	subsets: ['latin-ext'],
	display: 'swap',
	preload: true,
})

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

export const dynamic = 'force-dynamic'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={fira.className}>
			<body>
				<AnimatedGradient />
				<Navbar />
				<ToastProvider>
					<main>{children}</main>
				</ToastProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
