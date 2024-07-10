const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://smartalert-backend-stag.b2blink.ma:8080/api/:path*', // Proxy to Backend
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // This is the correct way to handle 'fs' in Webpack 5+
      };
    }
    return config;
  },
};
