import { Metadata } from 'next'
import Image from 'next/image'
import AboutMe from './aboutme'

export const metadata: Metadata = {
	title: 'About',
}
const About = () => {
	return (
		<div>
			<AboutMe />
		</div>
	)
}

export default About
