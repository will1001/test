const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: '../../dist/functions/next'
  // images: {
  //   domains: ['pbs.twimg.com'],
  // },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withPlugins([], nextConfig);
