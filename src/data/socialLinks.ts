import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { SocialLink } from '@/utils/types'

export const socialLinks: SocialLink[] = [
	{ icon: Github, url: 'https://github.com/brgv-code/', label: 'GitHub' },
	{ icon: Twitter, url: 'https://x.com/brgv_dev', label: 'Twitter' },
	{
		icon: Linkedin,
		url: 'https://www.linkedin.com/in/bhargavbrgv/',
		label: 'LinkedIn',
	},
	{ icon: Mail, url: 'mailto:hello@brgv.dev', label: 'Email' },
]

