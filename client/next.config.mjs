/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['localhost', 'via.placeholder.com', 'images.unsplash.com'],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
