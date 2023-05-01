const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  distDir: 'docs',
  images:{
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig
