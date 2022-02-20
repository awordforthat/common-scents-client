/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,

  async rewrites() {
    console.log('HELLO');
    return [
      {
        source: '/api/:upload',
        destination: 'http://localhost:5000/:upload', // Proxy to Backend
      },
    ];
  },
};
