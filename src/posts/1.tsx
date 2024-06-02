import CustomBold from '@/components/ui/custom-bold'
import CustomLink from '@/components/ui/custom-links'
import CodeBlock from '../components/ui/custom-code-block'
import Image from 'next/image'
const PostOne = () => {
	//TODO add react live code some point TODO add react-code-block

	return (
		<div>
			<p className='flex justify-between'>
				<span>Date: {'01 June 2024'}</span> <span> Reading Time: {'4m'} </span>
			</p>
			<br />
			<br />
			<div className='container mx-auto'>
				<span className='text-3xl text-red-900  font-extrabold italic'>#</span>
				<CustomBold> Transitioning from VS Code to NeoVim</CustomBold>

				<Image
					src='/blog1.webp'
					sizes={'80vw'}
					width={0}
					height={0}
					alt={''}
					className='m-auto p-auto w-[60%] my-4 opacity-80  rounded-lg'
				/>
				<div className='mb-4 text-md font-fira mt-4'>
					Today I finally switched to neovim &#x1F973;.
					<br />
					<div className='px-2 py-2'>
						{' '}
						I&apos;m still a newbie in this, trust me it is not so easy to move
						away from the comfort which I had with Visual Studio Code. But as
						they say, nothing grows in comfort zone. So here I am, question my
						life choices about why I switched to tmux and neovim. I know I would
						thank myself for this in future.
					</div>
					<br />
					<div className='px-4 pb-2'>
						Like most of the newbie developers, VS Code was my first IDE.
						It&apos;s a great tool, packed with features and an extensive plugin
						ecosystem. But over time, I started feeling its limitations. I will
						write a seperate blog post about the problems I faced. Maybe
						it&apos;s a fault at my end, or the software has actually become
						slow, I am not sure. I saw my collegue using neovim for the past few
						months and honestly I wanted to give it a try, mainly because of the
						speed and performance it provides. So, I decided to take the plunge
						and dive into the world of Tmux and Neovim. Here&apos;s how it went.
					</div>
					<br />
					<div className='px-4 pb-2'>
						First, let&apos;s talk about why I decided to leave VS Code behind.
						Don’t get me wrong; it’s a fantastic IDE and perfect for many
						developers. But here were my main gripes: performance issues,
						especially when I had multiple extensions running or when working on
						large projects, were killing my productivity. VS Code, being an
						Electron-based application, can be quite the resource hog, eating up
						RAM and CPU. Occasionally, it would freeze, making me restart and
						sometimes lose my unsaved work – super annoying. Additionally, I had
						to install tons of plugins to get the functionality I needed, and
						sometimes they didn&apos;t play well together, adding to the bloat
						and slowness. Despite these issues, VS Code will always have a
						special place in my heart. It’s user-friendly, feature-rich, and
						great for beginners. But I wanted something faster and more
						efficient.
					</div>
					<br />
					<div className='px-4 pb-2'>
						Enter Tmux and Neovim. I was initially drawn to Neovim because of
						its speed and performance. It&apos;s a terminal-based editor,
						lightweight, and it handles large files without breaking a sweat.
						Tmux, a terminal multiplexer, lets me create, access, and control
						multiple terminal sessions from a single window. This combination
						eliminates the lag and freezes I experienced with VS Code. Another
						major draw was the keyboard-centric workflow. Both Neovim and Tmux
						are designed to be used primarily with the keyboard. This means I
						can keep my hands on the keyboard, speeding up my workflow and
						reducing the need to switch between the keyboard and mouse. The
						ability to manage persistent sessions with Tmux has been a
						game-changer when working remotely via SSH. I can start a Tmux
						session on a server, detach from it, and reattach later from
						anywhere without losing my work. Perfect for long-running tasks and
						working from different locations.
					</div>
					<br />
					<div className='px-4 pb-2'>
						The customizability of Neovim and Tmux is another reason I made the
						switch. With configuration files (init.vim for Neovim and .tmux.conf
						for Tmux), I can tweak my setup to my heart’s content. Keybindings,
						color schemes, plugins – everything is customizable. This level of
						control is something I didn&apos;t realize I was missing until I had
						it.
					</div>
					<br />
					<div className='px-4 pb-2'>
						Switching to Tmux and Neovim wasn’t easy. It took time, patience,
						and a lot of practice. I started by installing Neovim and Tmux,
						setting up my configuration files, and learning the basic commands
						for both. Initially, it felt like I was learning to code all over
						again, but spending time each day in this new setup helped me become
						comfortable. The more I used it, the more I appreciated the
						efficiency and speed. I gradually added plugins to enhance
						functionality, starting simple and building up as I grew more
						confident.
					</div>
					<br />
					Happy coding!
				</div>
			</div>
		</div>
	)
}

export default PostOne
