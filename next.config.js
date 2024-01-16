/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'strix.com.ng',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
