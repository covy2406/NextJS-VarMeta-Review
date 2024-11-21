import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here: Older versions of Next.js can configure images.domains  */
  // images: {
  //   domains: ['theme-land.com'],
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theme-land.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
