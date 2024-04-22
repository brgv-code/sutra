import CustomBold from '@/components/ui/custom-bold'
import CustomLink from '@/components/ui/custom-links'
import CodeBlock from '../components/ui/custom-code-block'

const PostOne = () => {
	//TODO add react live code some point
	//TODO add react-code-block

	return (
		<>
			<div className='container mx-auto'>
				<CustomBold gradientColors={['red', 'purple']}>
					{' '}
					My Blog Post
				</CustomBold>
				{/* <h1 className='text-4xl font-bold mb-4'>My Blog Post</h1> */}

				<div className='mb-4 text-lg font-fira'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
					velit euismod, ultrices nunc id, aliquet nisl. Sed euismod, mauris id
					tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc
					lectus nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit
					tincidunt urna, quis lacinia neque nunc ac nunc. Sed nec nunc
					consectetur, aliquet nunc id, aliquam nunc. Sed euismod, mauris id
					<br />
					<CustomBold>bold text</CustomBold>
					<CustomLink text={'this'} url={'https://google.com'} />
					tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc
					lectus nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit{' '}
					<CodeBlock>
						{`
						
					import Image from 'next/image'
 
 export function Avatar({ id, alt }) {
   return <Image src={\`/avatars/\${id}.png\`} alt={alt} width="64" height="64" />
 }
  
 export function AvatarOfMe() {
   return <Avatar id="me" alt="A portrait of me" />
 }
 `.trim()}
					</CodeBlock>{' '}
					tincidunt urna, quis lacinia neque nunc ac nunc. Sed nec nunc
					consectetur, aliquet nunc id, aliquam nunc. Sed euismod, mauris id
					tincidunt aliquam, elit nunc tincidunt nunc, vitae tincidunt nunc
					lectus nec nunc. Sed auctor, nunc at efficitur ultrices, nunc elit
				</div>
			</div>
		</>
	)
}

export default PostOne
