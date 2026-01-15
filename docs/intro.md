---
sidebar_position: 1
---

# Introduction

**PredictUnify** provides a clean, unified REST interface for **Polymarket**, the world's largest prediction market. It abstracts away the complexities of the Polygon blockchain and CTF (Conditional Token Framework), enabling developers to build trading bots, dashboards, and analytics tools using standard HTTP requests.

## Key Features

- **📈 Real-Time Market Data**: Live odds, volume, and liquidity for thousands of markets.
- **🤖 Algorithmic Trading**: Programmatic execution of limit and market orders.
- **📊 Historical Data**: OHLCV candlestick charts (1m to 1d intervals) for backtesting.
- **💼 Portfolio Management**: Real-time tracking of positions, P&L, and cash balance.
- **🔒 Non-Custodial**: Your keys, your funds. We pass credentials through securely and never store them.

## Why PredictUnify?

Building directly on Polymarket requires deep knowledge of:

- Smart contract interactions (CTF)
- Gnosis Safe proxies
- EIP-712 signing
- Polygon network management

PredictUnify handles all of this for you. You just make simple REST calls.

## Getting Started

Ready to build?

1.  **[Get an API Key](https://rapidapi.com/chendrizzy/api/predictunify)** from RapidAPI.
2.  Check out the **[Quick Start](quick-start)** guide.
3.  Explore the **[API Reference](https://rapidapi.com/chendrizzy/api/predictunify)**.

## Security & Privacy

- **Pass-Through Architecture**: Your Polymarket credentials (`X-Poly-Api-Key`, etc.) are never stored on our servers (DB or Logs). They are used transiently to sign requests to the exchange.
- **Geo-Blocking**: This API enforces Polymarket's restricted jurisdiction rules. Trading is not available from the USA.
