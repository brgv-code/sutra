import CustomBold from '@/components/ui/custom-bold'
import CustomLink from '@/components/ui/custom-links'
import CodeBlock from '../components/ui/custom-code-block'
import Image from 'next/image'
import CustomHighlight from '../components/ui/custom-highlight'
import Heading from '@/components/ui/blog/heading'
import Highlight from '@/components/ui/blog/highlight'
import Subheading from '@/components/ui/blog/subheading'
import Intro from '@/components/ui/blog/intro'
const PostOne = () => {
	//TODO add react live code some point TODO add react-code-block

	return (
		<div>
			<br />
			<br />
			<div className='container mx-auto'>
				<Heading>Transitioning from VS Code to NeoVim</Heading>
				<p className='flex my-4 text-[#929293] text-md'>
					<span> June 01,2024</span> <span> - 2min read </span>
				</p>
				{/* <Image
					src='/blog1.webp'
					sizes={'80vw'}
					width={0}
					height={0}
					alt={''}
					loading='lazy'
					blur-up={true}
					className='m-auto p-auto w-[60%] my-4 opacity-80  rounded-lg'
				/> */}
				<div className='mb-4 text-sm font-fira mt-4 leading-loose'>
					<Intro>
						Today I finally switched to neovim &#x1F973;VisualStudio Code is my
						first IDE. It&apos;s a great tool, packed with features and an
						extensive plugin ecosystem. But over time, I started feeling its
						limitations. I saw my collegue using neovim for the past few months
						and honestly I wanted to give it a try, mainly because of the speed
						and performance it provides. So, I decided to take the plunge and
						dive into the world of Tmux and Neovim. Here&apos;s how it went.
					</Intro>
					<br />
					<Subheading>Problems with VS Code</Subheading>
					<div className='px-4 pb-8'>
						First, let&apos;s talk about why I decided to leave VS Code behind.
						Don’t get me wrong; it’s a fantastic IDE and perfect for many
						developers. But here were my main gripes:{' '}
						<CustomLink
							href={'https://github.com/microsoft/vscode/issues/82846'}
						>
							performance issues
						</CustomLink>{' '}
						, especially when I had multiple extensions running or when working
						on large projects, were killing my productivity. VS Code, being an
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
					<Subheading>Enter Vim</Subheading>
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
						switch. With configuration files <Highlight>init.vim</Highlight> for
						Neovim and .tmux.conf for Tmux , I can tweak my setup to my heart’s
						content. Keybindings, color schemes, plugins – everything is
						customizable. This level of control is something I didn&apos;t
						realize I was missing until I had it.
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
