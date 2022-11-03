/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['akcdn.detik.net.id']
  },
  swcMinify: true,
  experimental:{
    appDir: true
  }
}

module.exports = nextConfig
