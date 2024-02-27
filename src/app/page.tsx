import Image from 'next/image'
import background from '../../public/bg.jpg'
export default function Home() {
  return (
    <div>
		<Image src={background}
		className='blur-[2px]'
 alt="Picture of the author"
 placeholder="blur"
 quality={100}
 fill
 sizes="100vw"
 priority
 style={{
   objectFit: 'cover',
   zIndex: -1
   
 }}
		></Image>
	</div>
  )
}
