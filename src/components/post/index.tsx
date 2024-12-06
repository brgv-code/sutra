import Image from 'next/image'
import  Heading from '@/components/ui/blog/heading'
import  Decoration from '@/components/ui/blog/decoration'
import  CustomHighlight from '@/components/ui/custom-highlight'
import  Highlight  from '@/components/ui/blog/highlight'
import  Intro  from '@/components/ui/blog/intro'
import  CustomLink from '@/components/ui/custom-links'
import Subheading  from '@/components/ui/blog/subheading'
import ContentRenderer from '@/components/ui/content-renderer'
interface PostProps {
	Name: string
	// bannerImage: string
	// bannerImageWidth: number
	// bannerImageHeight: number
	content: string
}

export function Post(props: PostProps) {
	const { Name, content } = props
console.log(content,'content');
	return (
		<div className='container w-1/2 mx-auto'>
			<Heading >{Name}</Heading>
			{/* <Image
				alt='Blog Image'
				src={bannerImage}
				// width={bannerImageWidth}
				width={'800'}
				height={bannerImageHeight}
				className='[width: 800px]!'
			/> */}
  <ContentRenderer content={content}/>
		</div>
	)
}
