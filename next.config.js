/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['github.com'],
	},
	async rewrites() {
		return [
			{
				source: '/og-image.png',
				destination: '/api/og-image',
				has: [{ type: 'query', key: 'title' }],
			},
		];
	},
};

module.exports = nextConfig;
