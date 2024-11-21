import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
    after: true,
    optimizePackageImports: [
      '@uiw/react-md-editor',
      'slugify',
      'next-sanity',
      'sanity',
      'sanity-plugin-markdown',
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
