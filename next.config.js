/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['profile.line-scdn.net'],
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
