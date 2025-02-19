/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['https://prod-files-secure.s3.us-west-2.amazonaws.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
				port: '',
			},
		],
	},
}
const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
  });
  
  module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  });
  
module.exports = nextConfig
