/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,

  async rewrites() {
    return [
      {
        source: '/api/:upload',
        destination: `${process.env.SERVER_URL}/:upload`, // Proxy to Backend
      },
    ];
  },
};
