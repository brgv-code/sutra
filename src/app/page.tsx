'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

import BentoCard from '@/components/home/BentoCard'
import HeroCard from '@/components/home/HeroCard'
import ProjectsCard from '@/components/home/ProjectsCard'
import TechnologiesCard from '@/components/home/TechnologiesCard'
import BlogCard from '@/components/home/BlogCard'
import BooksCard from '@/components/home/BooksCard'

import { useMouseGradientEffect } from '@/utils/animation'
import BackgroundEffect from '@/components/home/BackgroundEffectHome'
import { HomeContext } from '@/components/home/HomeContext'

const Home: React.FC = () => {
	const [hoveredCard, setHoveredCard] = useState<string | null>(null)
	const radialGradientPos = useMouseGradientEffect()

	const handleHover = useCallback(
		(cardName: string) => (): string => {
			return cardName
		},
		[],
	)

	return (
		<HomeContext.Provider
			value={{ hoveredCard, setHoveredCard, radialGradientPos }}
		>
			<div className='min-h-screen mt-4 md:mt-[5%] text-white overflow-hidden px-4 py-6 md:p-6'>
				<BackgroundEffect />
				<motion.div
					initial='hidden'
					animate='show'
					className='relative max-w-7xl mx-auto'
				>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:grid-auto-rows-[200px]'>
						<BentoCard
							colspan={2}
							className='row-span-1 md:row-span-3'
							onHover={handleHover('hero')}
							gradient
						>
							<HeroCard />
						</BentoCard>
						<BentoCard
							onHover={handleHover('blog')}
							gradient
							className='col-span-1 md:col-start-1'
						>
							<BlogCard />
						</BentoCard>
						<BentoCard
							onHover={handleHover('projects')}
							gradient
							className='col-span-1 md:col-start-2'
						>
							<ProjectsCard />
						</BentoCard>

						<BentoCard
							onHover={handleHover('tech')}
							gradient
							className='col-span-1 md:col-start-3'
						>
							<TechnologiesCard />
						</BentoCard>

						<BentoCard
							onHover={handleHover('books')}
							gradient
							className='col-span-1 md:col-start-4 '
						>
							<BooksCard />
						</BentoCard>
					</div>
				</motion.div>
			</div>
		</HomeContext.Provider>
	)
}

export default Home
