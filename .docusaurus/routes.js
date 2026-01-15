import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/predictunify-docs/markdown-page',
    component: ComponentCreator('/predictunify-docs/markdown-page', '3cb'),
    exact: true
  },
  {
    path: '/predictunify-docs/docs',
    component: ComponentCreator('/predictunify-docs/docs', '96e'),
    routes: [
      {
        path: '/predictunify-docs/docs',
        component: ComponentCreator('/predictunify-docs/docs', 'ec4'),
        routes: [
          {
            path: '/predictunify-docs/docs',
            component: ComponentCreator('/predictunify-docs/docs', '691'),
            routes: [
              {
                path: '/predictunify-docs/docs/api-reference',
                component: ComponentCreator('/predictunify-docs/docs/api-reference', '1b4'),
                exact: true
              },
              {
                path: '/predictunify-docs/docs/api/cancel-order',
                component: ComponentCreator('/predictunify-docs/docs/api/cancel-order', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/create-order',
                component: ComponentCreator('/predictunify-docs/docs/api/create-order', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-balance',
                component: ComponentCreator('/predictunify-docs/docs/api/get-balance', '8c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-health',
                component: ComponentCreator('/predictunify-docs/docs/api/get-health', '745'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-market',
                component: ComponentCreator('/predictunify-docs/docs/api/get-market', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-order',
                component: ComponentCreator('/predictunify-docs/docs/api/get-order', '7f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-orderbook',
                component: ComponentCreator('/predictunify-docs/docs/api/get-orderbook', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-positions',
                component: ComponentCreator('/predictunify-docs/docs/api/get-positions', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/get-price-history',
                component: ComponentCreator('/predictunify-docs/docs/api/get-price-history', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/health',
                component: ComponentCreator('/predictunify-docs/docs/api/health', '558'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/history',
                component: ComponentCreator('/predictunify-docs/docs/api/history', '473'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/list-markets',
                component: ComponentCreator('/predictunify-docs/docs/api/list-markets', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/list-orders',
                component: ComponentCreator('/predictunify-docs/docs/api/list-orders', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/markets',
                component: ComponentCreator('/predictunify-docs/docs/api/markets', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/orders',
                component: ComponentCreator('/predictunify-docs/docs/api/orders', '133'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/portfolio',
                component: ComponentCreator('/predictunify-docs/docs/api/portfolio', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/api/predictunify-api',
                component: ComponentCreator('/predictunify-docs/docs/api/predictunify-api', 'a90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/category/api-reference',
                component: ComponentCreator('/predictunify-docs/docs/category/api-reference', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/intro',
                component: ComponentCreator('/predictunify-docs/docs/intro', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/predictunify-docs/docs/quick-start',
                component: ComponentCreator('/predictunify-docs/docs/quick-start', 'a91'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/predictunify-docs/',
    component: ComponentCreator('/predictunify-docs/', 'd63'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
