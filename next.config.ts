import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async headers() {
    const iframeHeaders = [
      { key: 'X-Frame-Options', value: 'ALLOWALL' },
      { key: 'Content-Security-Policy', value: 'frame-ancestors *' },
    ];
    return [{ source: '/embed', headers: iframeHeaders }];
  },
};

export default nextConfig;
