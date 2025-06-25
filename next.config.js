/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Enable font optimization for better performance
  optimizeFonts: true,
  // Remove static export configuration for Vercel deployment
  trailingSlash: false,
};

module.exports = nextConfig;