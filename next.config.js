/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['https://firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
