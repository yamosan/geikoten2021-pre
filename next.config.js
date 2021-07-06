module.exports = {
  images: {
    domains: ["scdn.line-apps.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
