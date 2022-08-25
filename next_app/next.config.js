/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
      
  //   }
  // },
  images: {
    // domains: ['storage.googleapis.com', 'coinpayments.net'],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: true,

};

module.exports = nextConfig;
