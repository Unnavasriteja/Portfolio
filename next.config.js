const nextConfig = {
 
  images: {
    unoptimized: true, // Required for static export
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
