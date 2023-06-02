const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/website/' : '',
  basePath: isProd ? '/website' : '',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig
