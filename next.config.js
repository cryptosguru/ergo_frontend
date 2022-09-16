/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://storage.googleapis.com/ergo-cms-media/docs/:path*',
        permanent: true,
      },
      {
        source: '/img/:path*',
        destination: 'https://storage.googleapis.com/ergo-cms-media/img/:path*',
        permanent: true,
      },

      {
        source: '/about/',
        destination: '/discover/#DiscoverERG',
        permanent: true,
      },
      {
        source: '/basics/',
        destination: '/discover/#DiscoverERG',
        permanent: true,
      },
      {
        source: '/wallets/',
        destination: '/get-erg/#Wallets',
        permanent: true,
      },
      {
        source: '/exchanges/',
        destination: '/get-erg/#Exchanges',
        permanent: true,
      },
      {
        source: '/contribute/',
        destination: '/community/#Contribute',
        permanent: true,
      },
      {
        source: '/software/',
        destination: '/discover/#DiscoverERG',
        permanent: true,
      },
      {
        source: '/use_cases/',
        destination: '/#UniqueErgo',
        permanent: true,
      },
      {
        source: '/foundation/',
        destination: '/community/#Foundation',
        permanent: true,
      },
      {
        source: '/hall_of_fame/',
        destination: '/community/#HallOfFame',
        permanent: true,
      },
      {
        source: '/documents/',
        destination: '/discover/#Documents',
        permanent: true,
      },
      { source: '/faq/', destination: '/discover/#FAQ', permanent: true },
      {
        source: '/mining/',
        destination: '/get-erg/#Mining',
        permanent: true,
      },
      {
        source: '/privacy/',
        destination: '/privacy-policy/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: [
      'default',
      'en',
      'es',
      'de',
      // 'fr',
      // 'hi',
      'it',
      // 'tr',
      'pt',
      'hu',
      'ru',
      'cn',
      // 'ro',
      // 'sk',
      // 'zh',
    ],
    defaultLocale: 'default',
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['storage.googleapis.com'],
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(nextConfig);
