/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'strix.com.ng',
            port: '',
          },

          {
            protocol: 'https',
            hostname: 'fdn2.gsmarena.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
