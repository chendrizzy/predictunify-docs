import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/predictunify-api",
    },
    {
      type: "category",
      label: "Markets",
      link: {
        type: "doc",
        id: "api/markets",
      },
      items: [
        {
          type: "doc",
          id: "api/list-markets",
          label: "List prediction markets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-market",
          label: "Get market details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-orderbook",
          label: "Get market orderbook",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "History",
      link: {
        type: "doc",
        id: "api/history",
      },
      items: [
        {
          type: "doc",
          id: "api/get-price-history",
          label: "Get price history",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Orders",
      link: {
        type: "doc",
        id: "api/orders",
      },
      items: [
        {
          type: "doc",
          id: "api/list-orders",
          label: "List orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-order",
          label: "Place order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-order",
          label: "Get order details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/cancel-order",
          label: "Cancel order",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Portfolio",
      link: {
        type: "doc",
        id: "api/portfolio",
      },
      items: [
        {
          type: "doc",
          id: "api/get-positions",
          label: "Get positions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-balance",
          label: "Get balance",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      link: {
        type: "doc",
        id: "api/health",
      },
      items: [
        {
          type: "doc",
          id: "api/get-health",
          label: "Health check",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
