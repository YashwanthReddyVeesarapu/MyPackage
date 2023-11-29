/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude server-only modules from being bundled on the client side
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        http2: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
