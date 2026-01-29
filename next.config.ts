import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL('https://avatars.githubusercontent.com'),
			new URL('https://lh3.googleusercontent.com/a/ACg8ocIU_C7-pJ2T5FBm7upX3os8coomPwVH9FTFHK8Iqsn2icKrhw=s96-c'),
		],
	},
}

export default nextConfig
