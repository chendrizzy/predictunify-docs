<p align="center">
  <img src="assets/icon.png" alt="PredictUnify Logo" width="180" height="180" />
</p>

<h1 align="center">PredictUnify API</h1>

<p align="center">
  <strong>The Unified REST API for Polymarket Prediction Markets</strong>
</p>

<p align="center">
  <a href="https://rapidapi.com/chendrizzy/api/predictunify" target="_blank">
    <img src="https://img.shields.io/badge/Available%20on-RapidAPI-blue?style=for-the-badge&logo=rapidapi" alt="Available on RapidAPI" />
  </a>
  <a href="https://predictunify.p.rapidapi.com/health" target="_blank">
    <img src="https://img.shields.io/badge/Status-Operational-success?style=for-the-badge" alt="API Status" />
  </a>
</p>

---

## ⚡️ Overview

**PredictUnify** provides a clean, unified REST interface for **Polymarket**, the world's largest prediction market. It abstracts away the complexities of the Polygon blockchain and CTF (Conditional Token Framework), enabling developers to build trading bots, dashboards, and analytics tools using standard HTTP requests.

### Key Features

- **📈 Real-Time Market Data**: Live odds, volume, and liquidity for thousands of markets.
- **🤖 Algorithmic Trading**: Programmatic execution of limit and market orders.
- **📊 Historical Data**: OHLCV candlestick charts (1m to 1d intervals) for backtesting.
- **💼 Portfolio Management**: Real-time tracking of positions, P&L, and cash balance.
- **🔒 Non-Custodial**: Your keys, your funds. We pass credentials through securely and never store them.

## 🚀 Quick Start

### 1. Get an API Key

Subscribe to the API on **[RapidAPI](https://rapidapi.com/chendrizzy/api/predictunify)** to get your `X-RapidAPI-Key`.

- **Basic Tier**: 200 requests/month (Perfect for testing).
- **Pro Tier**: 50,000 requests/month + Trading enabled.

### 2. Search Active Markets

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/markets?status=active&sortBy=volume&limit=5' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
	--header 'X-RapidAPI-Host: predictunify.p.rapidapi.com'
```

### 3. Place a Trade (Pro Only)

To trade, you must provide your Polymarket API credentials via headers. These are passed directly to the exchange.

```bash
curl --request POST \
	--url 'https://predictunify.p.rapidapi.com/orders' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
	--header 'X-Poly-Api-Key: <YOUR_POLY_API_KEY>' \
	--header 'X-Poly-Api-Secret: <YOUR_POLY_SECRET>' \
	--header 'X-Poly-Passphrase: <YOUR_POLY_PASSPHRASE>' \
	--header 'Content-Type: application/json' \
	--data '{
		"marketId": "0x...",
		"outcomeId": "0x...",
		"side": "buy",
		"type": "limit",
		"price": 0.55,
		"size": 20
	}'
```

## 📚 API Reference

| Endpoint                  | Method   | Description                                         |
| :------------------------ | :------- | :-------------------------------------------------- |
| `/markets`                | `GET`    | List and filter markets (category, status, volume). |
| `/markets/{id}`           | `GET`    | Get detailed market metadata.                       |
| `/markets/{id}/orderbook` | `GET`    | Get live bids and asks.                             |
| `/markets/{id}/history`   | `GET`    | Get OHLCV price candles.                            |
| `/orders`                 | `GET`    | List your open and historical orders.               |
| `/orders`                 | `POST`   | Place a new limit or market order.                  |
| `/orders/{id}`            | `DELETE` | Cancel an open order.                               |
| `/portfolio/positions`    | `GET`    | Get current positions and P&L.                      |
| `/portfolio/balance`      | `GET`    | Get available USDC balance.                         |

> **Full OpenAPI Documentation**: Available on the [RapidAPI Definitions Tab](https://rapidapi.com/chendrizzy/api/predictunify).

## 🛡 Security & Privacy

- **Pass-Through Architecture**: Your Polymarket credentials (`X-Poly-Api-Key`, etc.) are never stored on our servers (DB or Logs). They are used transiently to sign requests to the exchange.
- **Geo-Blocking**: This API enforces Polymarket's restricted jurisdiction rules. Trading is not available from the USA.

## 📄 License

This project documentation is licensed under the MIT License. The API service is proprietary.

---

<p align="center">
  Built for traders, by traders.
</p>
