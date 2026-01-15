<p align="center">
  <img src="assets/icon.png" alt="PredictUnify Logo" width="180" height="180" />
</p>

<h1 align="center">PredictUnify API Documentation</h1>

<p align="center">
  <strong>The Unified REST API for Polymarket Prediction Markets</strong>
</p>

<p align="center">
  <a href="https://chendrizzy.github.io/predictunify-docs/" target="_blank">
    <img src="https://img.shields.io/badge/Read%20the%20Docs-Live%20Site-blue?style=for-the-badge&logo=docusaurus" alt="Read the Docs" />
  </a>
  <a href="https://rapidapi.com/chendrizzy/api/predictunify" target="_blank">
    <img src="https://img.shields.io/badge/Subscribe%20on-RapidAPI-blue?style=for-the-badge&logo=rapidapi" alt="Available on RapidAPI" />
  </a>
</p>

---

## ⚡️ Overview

**PredictUnify** abstracts away the complexities of the Polygon blockchain and CTF (Conditional Token Framework), enabling developers to build trading bots, dashboards, and analytics tools using standard HTTP requests.

We handle the Gnosis Safe proxies, EIP-712 signing, and CLOB interactions so you can focus on your trading strategy.

### [➡️ Click here to view the full Interactive Documentation](https://chendrizzy.github.io/predictunify-docs/)

---

<details open>
<summary><h2>📚 API Quick Reference</h2></summary>

### Markets

- [**GET /markets**](https://chendrizzy.github.io/predictunify-docs/docs/api/list-markets) - List and filter active markets
- [**GET /markets/{id}**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-market) - Get detailed market metadata
- [**GET /markets/{id}/orderbook**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-orderbook) - Get live bids and asks
- [**GET /markets/{id}/history**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-price-history) - Get OHLCV price candles

### Orders (Pro Tier)

- [**GET /orders**](https://chendrizzy.github.io/predictunify-docs/docs/api/list-orders) - List your open and historical orders
- [**POST /orders**](https://chendrizzy.github.io/predictunify-docs/docs/api/create-order) - Place a new limit or market order
- [**GET /orders/{id}**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-order) - Get order details
- [**DELETE /orders/{id}**](https://chendrizzy.github.io/predictunify-docs/docs/api/cancel-order) - Cancel an open order

### Portfolio (Pro Tier)

- [**GET /portfolio/positions**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-positions) - Get current positions and P&L
- [**GET /portfolio/balance**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-balance) - Get available USDC balance

### System

- [**GET /health**](https://chendrizzy.github.io/predictunify-docs/docs/api/get-health) - API health check

</details>

<details open>
<summary><h2>🚀 Key Features</h2></summary>

- **📈 Real-Time Market Data**: Live odds, volume, and liquidity for thousands of markets.
- **🤖 Algorithmic Trading**: Programmatic execution of limit and market orders.
- **📊 Historical Data**: OHLCV candlestick charts (1m to 1d intervals) for backtesting.
- **💼 Portfolio Management**: Real-time tracking of positions, P&L, and cash balance.
- **🔒 Non-Custodial**: Your keys, your funds. We pass credentials through securely and never store them.

</details>

<details>
<summary><h2>🛠️ Usage Examples</h2></summary>

### 1. Search for Active Markets

Find the top 5 most active markets by volume.

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/markets?status=active&sortBy=volume&limit=5' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>'
```

**Response:**

```json
{
  "data": [
    {
      "id": "0x...",
      "question": "Who will win the 2024 US Presidential Election?",
      "volume": 450000000,
      "outcomes": ["Trump", "Biden", "Other"]
    }
  ]
}
```

### 2. Get Price History (Candlesticks)

Get 1-hour OHLCV candles for backtesting.

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/markets/{market_id}/history?interval=1h&limit=100' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>'
```

### 3. Place a Trade (Pro Only)

Execute a limit order to buy "Yes" shares.

```bash
curl --request POST \
	--url 'https://predictunify.p.rapidapi.com/orders' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
	--header 'X-Poly-Api-Key: <YOUR_POLY_KEY>' \
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

</details>

<details open>
<summary><h2>💰 Pricing Tiers</h2></summary>

| Tier      | Monthly Price | Request Limit     | Trading Enabled? | Best For               |
| :-------- | :------------ | :---------------- | :--------------- | :--------------------- |
| **Basic** | **Free**      | 200 / month       | ❌ No            | Testing connectivity   |
| **Pro**   | **$9.00**     | 50,000 / month    | ✅ Yes           | Algo Traders & Bots    |
| **Ultra** | **$49.00**    | 1,000,000 / month | ✅ Yes           | High-Frequency Trading |

[**Subscribe on RapidAPI**](https://rapidapi.com/chendrizzy/api/predictunify)

</details>

<details>
<summary><h2>🛡 Security & Privacy</h2></summary>

- **Pass-Through Architecture**: Your Polymarket credentials (`X-Poly-Api-Key`, etc.) are never stored on our servers (DB or Logs). They are used transiently to sign requests to the exchange.
- **Geo-Blocking**: This API enforces Polymarket's restricted jurisdiction rules. Trading is not available from the USA.

</details>

---

<p align="center">
  Built for traders, by traders.
</p>
