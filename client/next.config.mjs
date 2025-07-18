/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 👈 enables static export
  images: {
    unoptimized: true, // 👈 required if using <Image> with static export
  },
};

export default nextConfig;
