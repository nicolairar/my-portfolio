/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NEXT_PUBLIC_ENV === 'production'
  },
  output: process.env.NEXT_PUBLIC_ENV === 'production' ? 'export' : 'standalone'
}

export default nextConfig
