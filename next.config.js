/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pisces.bbystatic.com']
  }
}

module.exports = nextConfig
