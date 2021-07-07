const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    domains: ["scdn.line-apps.com"],
    loader: "imgix",
    path: "/",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  trailingSlash: isProd,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};
