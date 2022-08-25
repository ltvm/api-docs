// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KyberSwap API Documentation',
  tagline: 'KyberSwap',
  url: 'https://api.kyberswap.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KyberNetwork',
  projectName: 'api-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        specs: [
          {
            id: 'aggregator-api',
            spec: 'openapi/aggregator/openapi.yaml',
            route: '/api/aggregator',
          },
          {
            id: 'notification-api',
            spec: 'openapi/notification/openapi.yaml',
            route: '/api/notification',
          },
          {
            id: 'referral-api',
            spec: 'openapi/referral/openapi.yaml',
            route: '/api/referral',
          },
          {
            id: 'typeswap-api',
            spec: 'openapi/typeswap/openapi.yaml',
            route: '/api/typeswap',
          },
          {
            id: 'reward-api',
            spec: 'openapi/reward/openapi.yaml',
            route: '/api/reward',
          }
        ],
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KyberSwap API Documentation',
        logo: {
          alt: 'KyberSwap Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/KyberNetwork/api-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kyber Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
