const nextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable image optimization for compatibility with static export
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // Disable optimization for complex SVGs
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
