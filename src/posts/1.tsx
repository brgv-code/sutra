import CustomBold from '@/components/ui/custom-bold'
import CustomLink from '@/components/ui/custom-links'
import CodeBlock from '../components/ui/custom-code-block'
import Image from 'next/image'
import CustomHighlight from '../components/ui/custom-highlight'
import Heading from '@/components/ui/blog/heading'
import Highlight from '@/components/ui/blog/highlight'
import Subheading from '@/components/ui/blog/subheading'
import Intro from '@/components/ui/blog/intro'
const PostOne = () => (
	/*TODO add react live code some point TODO add react-code-block*/ <div>
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
					Today, I finally switched to{' '}
					<CustomLink href='https://neovim.io/'>Neovim</CustomLink> 🥳
					VisualStudio Code is my first IDE. It’s a great tool with features and
					an extensive plugin ecosystem. But over time, I started feeling its
					limitations. I saw my colleague using Neovim for the past few months,
					and honestly, I wanted to give it a try, mainly because of the
					performance it provides. So, I decided to take the plunge and dive
					into the world of Tmux and Neovim. Here’s how it went.
				</Intro>
				<br />
				<Subheading>Problems with VS Code</Subheading>
				<div className='px-4 pb-8'>
					First, let’s talk about why I decided to leave VS Code behind. Don’t
					get me wrong; it’s a fantastic IDE and perfect for many developers.
					But here were my main concerns: {' '}
					<ul className='mt-2 ml-4 marker:text-[#669f6e]  list-disc list-inside'>
						<li className='mb-4'>
							<CustomLink
								href={'https://github.com/microsoft/vscode/issues/82846'}
							>
								Performance issues
							</CustomLink>{' '}
							, especially when running multiple extensions or working on large
							projects, were killing my productivity. As an electron-based
							application, VS Code can be quite a resource that eats up RAM and
							CPU.
							<span className='text-[10px] text-[#D9C22D] p-4'>
								<CustomHighlight>See below image</CustomHighlight>
							</span>
							Sometimes, the screen takes {'>'} 5 seconds just to save the
							changes.🤯🫠
							<Image
								src={'/blogs/blog1_2.png'}
								sizes={'100vw'}
								width={0}
								height={0}
								alt={''}
								loading='lazy'
								blur-up={true}
								className='m-auto p-auto w-full my-4 rounded-xl border-gray-500 border-2 '
							/>
						</li>
						<li className='mb-4'>
							Occasionally, it would{' '}
							<CustomLink
								href={'https://github.com/microsoft/vscode/issues/154879'}
							>
								freeze
							</CustomLink>
							, making me restart and lose my unsaved work – super annoying.
						</li>
						<li className='mb-4'>
							Additionally, I had to install tons of plugins to get the
							functionality I needed, and sometimes, they didn’t play well
							together, adding to the bloat and slowness.
						</li>
					</ul>
					Despite these issues, VS Code will always have a special place in my
					heart. It’s user-friendly, feature-rich, and great for beginners. But
					I wanted something faster and more efficient. :{' '}
				</div>
				<Subheading>Enter Vim</Subheading>
				<div className='px-4 pb-2'>
					I used a flavour on NeoVim called{' '}
					<CustomLink href='https://nvchad.com/'>NVChad</CustomLink>, which
					comes with most built-in features so that you don’t have to configure
					everything from scratch. It’s a terminal-based editor that is
					lightweight, and it handles large files without breaking a sweat.
					Along with NVChad, I installed{' '}
					<CustomLink href='https://iterm2.com/'>Iterm2</CustomLink> &{' '}
					<CustomLink href='https://github.com/tmux/tmux/wiki/Getting-Started'>
						Tmux
					</CustomLink>
					, Which eliminates the lag and freezes I experienced with VS Code.
					Both Neovim and Tmux are designed to be used primarily with the
					keyboard. This means I can keep my hands on the keyboard, speeding up
					my workflow and reducing the need to switch between the keyboard and
					mouse. The ability to manage persistent sessions with Tmux has been a
					game-changer when working remotely via SSH. I can start a tmux session
					on a server, detach from it, and reattach later from anywhere without
					losing my work. Perfect for long-running tasks and working from
					different locations.
				</div>
				<br />
				<div className='px-4 pb-2'>
					Switching to Tmux and Neovim wasn’t easy. It took time, patience, and
					a lot of practice. I started by installing Neovim and Tmux, setting up
					my configuration files, and learning the basic commands. Initially, it
					felt like I was learning to code again, but spending time each day in
					this new setup helped me become comfortable. The more I used it, the
					more I appreciated the efficiency and speed. I gradually added plugins
					to enhance functionality, starting simple and building up as I grew
					more confident. In the end, my development screen now looks like this!
				</div>
				<br />
				<Image
					src={'/blogs/blog1_1.png'}
					sizes={'100vw'}
					width={0}
					height={0}
					alt={''}
					loading='lazy'
					blur-up={true}
					className='m-auto p-auto w-full my-4 rounded-xl border-gray-500 border-2'
				/>
				<div className='px-4 pb-2'>
					I have the development server running on the top-left corner, and{' '}
					<CustomLink href='https://github.com/jesseduffield/lazygit'>
						lazygit
					</CustomLink>{' '}
					<span className='text-[10px] text-[#D9C22D] p-4'>
						<CustomHighlight>another amazing tool!</CustomHighlight>
					</span>{' '}
					on the bottom-left. The right side is for the Neovim editor. I can
					easily switch between them using Tmux shortcuts, and I can navigate
					through the code using Neovim commands. It’s a clean, distraction-free
					setup that helps me focus on the task at hand. I’m still learning new
					tricks and shortcuts every day, but I’m already seeing the benefits of
					this new workflow. I’m more productive, more focused, and more in
					control of my development environment. I’m excited to see where this
					journey takes me and how it will shape my coding habits in the future.
					If you’re thinking about making the switch to Neovim, I highly
					recommend it. It’s a powerful tool that can transform the way you code
					and help you become a more efficient developer. Give it a try and see
					for yourself!. <br />
					<span className='text-[10px] text-[#D9C22D] p-4'>
						{' '}
						<CustomHighlight>
							I will write a detailed post on how to set up Neovim and Tmux in
							the future
						</CustomHighlight>
					</span>
				</div>
				Happy coding!
			</div>
		</div>
	</div>
)

export default PostOne
