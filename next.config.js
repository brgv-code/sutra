/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ['framer-motion', '@vercel/analytics'],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],
}

const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
})

// Combine the configurations
module.exports = withMDX(nextConfig)
