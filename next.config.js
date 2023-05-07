const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.pexels.com', 'oaidalleapiprodscus.blob.core.windows.net']
  }
}

module.exports = nextConfig
