/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bcrypt: 'commonjs bcrypt',
      });
    }
    return config;
  },
};

export default nextConfig;