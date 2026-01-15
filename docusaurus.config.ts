import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'PredictUnify API',
  tagline: 'Unified REST API for Polymarket prediction market data and trading',
  favicon: 'img/favicon.ico',

  url: 'https://predictunify-api.my-predictunify.workers.dev',
  baseUrl: '/',

  organizationName: 'chendrizzy',
  projectName: 'predictunify-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/chendrizzy/predictunify-docs/tree/main/',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          predictunify: {
            specPath: '../specs/001-predictunify-api/contracts/openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'PredictUnify',
      logo: {
        alt: 'PredictUnify Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: 'API Reference',
          position: 'left',
          to: '/docs/api/list-markets',
        },
        {
          href: 'https://rapidapi.com/chendrizzy/api/predictunify',
          label: 'RapidAPI',
          position: 'right',
        },
        {
          href: 'https://github.com/chendrizzy/predictunify-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Quick Start',
              to: '/docs/quick-start',
            },
            {
              label: 'API Reference',
              to: '/docs/api/list-markets',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'RapidAPI',
              href: 'https://rapidapi.com/chendrizzy/api/predictunify',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chendrizzy/predictunify-api',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PredictUnify. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
