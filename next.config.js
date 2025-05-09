/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      // 如果您还从其他域名加载图片，也需要在这里添加
    ],
  },
};

module.exports = nextConfig;
