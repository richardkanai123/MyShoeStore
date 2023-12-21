/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'files.edgestore.dev',
            },
        ],
    }
}

module.exports = nextConfig
