import React from 'react'
interface IntroProps {
	children: React.ReactNode
}

const Intro: React.FC<IntroProps> = ({ children }) => {
	return <div className='px-4 text-[#cfcfdb]'>{children}</div>
}

export default Intro
