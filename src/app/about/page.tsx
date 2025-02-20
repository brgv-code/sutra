import { Metadata } from 'next'
import AboutMe from './aboutme'

export const metadata: Metadata = {
	title: 'About',
}
const About = () => {
	return <AboutMe />
}

export default About
