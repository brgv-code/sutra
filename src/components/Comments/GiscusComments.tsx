'use client'
import Giscus from '@giscus/react'

interface GiscusCommentsProps {
	slug: string
	title: string
	className?: string
}

export default function GiscusComments({
	slug,
	title,
	className = '',
}: GiscusCommentsProps) {
	return (
		<section
			className={`comments-section mt-8 md:mt-12 ${className}`}
			aria-label={`Comments for ${title}`}
		>
			<div className='border border-white/10 rounded-xl p-5 md:p-6 shadow-xl bg-gray-900/40 backdrop-blur-sm'>
				<div className='mb-4'>
					<h3 className='text-xl font-mono font-bold text-white mb-2'>
						💬 Comments
					</h3>
				</div>

				<Giscus
					id='comments'
					repo={
						(process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`) ||
						'brgv-code/sutra'
					}
					repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
					category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'Announcements'}
					categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ''}
					mapping='pathname'
					strict='0'
					reactionsEnabled='1'
					emitMetadata='1'
					inputPosition='bottom'
					theme='transparent_dark'
					lang='en'
					loading='lazy'
				/>
			</div>
		</section>
	)
}
