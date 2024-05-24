import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'About',
}
const About = () => {
	return (
		<div className='b-shadow w-1/2'>
			<section>
				<h2>Introduction</h2>
				<Image
					src='memoji1.svg'
					sizes={'100vh'}
					alt='Introduction Image'
					width={0}
					height={0}
					className='w-48 h-48 rounded-full'
				/>
				<p>Write a brief introduction about yourself here.</p>
			</section>

			<section>
				<h2>Work Experience</h2>
				<p>Write about your work experience here.</p>
			</section>

			<section>
				<h2>Hobbies</h2>
				<p>Write about your hobbies and interests here.</p>
			</section>

			<section>
				<h2>Goals</h2>
				<p>Write about your goals and aspirations here.</p>
			</section>
		</div>
	)
}

export default About
