const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  sassOptions: {
    outputStyle: 'expanded',
  },
  images: {
    deviceSizes: [320, 660, 768, 1024, 1366, 1920],
    domains: ['localhost', 'm2.kh.dev-dinarys.com', 'kontakt-mock-api.herokuapp.com'],
    path: '/_next/image',
    loader: 'default',
  },
  i18n: {
    locales: ['ru', 'az'],
    defaultLocale: 'az',
    localeDetection: false,
  },
};

module.exports = nextConfig;
