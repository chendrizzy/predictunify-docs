# RapidAPI Listing Guide for PredictUnify

Use this content to fill out your RapidAPI listing. This is optimized for SEO and conversion.

## 1. General Information

**API Name**: PredictUnify
**Short Description**: The complete REST API for Polymarket. Search markets, get real-time odds, and execute trades programmatically.
**Category**: Finance / Tools / Sports

## 2. Long Description (SEO Optimized)

> **Copy and paste this into the "Long Description" field:**

**PredictUnify** is the ultimate unified API for **Polymarket**, the world's largest prediction market. Built for developers, algorithmic traders, and data analysts, PredictUnify turns complex blockchain interactions into simple, standard REST API calls.

### 🚀 Key Features

- **Real-Time Market Data**: Get instant access to live odds, volume, and liquidity for thousands of markets (Politics, Sports, Crypto, Pop Culture).
- **Algorithmic Trading**: Execute **buy** and **sell** orders programmatically with millisecond latency.
- **Historical Data**: Access OHLCV candlestick charts for backtesting strategies (1m, 5m, 1h, 4h, 1d intervals).
- **Portfolio Management**: Track your positions, P&L, and cash balance in real-time.
- **Unified Interface**: One standard REST API that abstracts away the complexities of the Polygon blockchain and CTF exchange.

### 🎯 Who is this for?

- **Algo-Traders**: Build bots to arb markets or trade on news events.
- **Data Aggregators**: Display live prediction market odds on your news site or dashboard.
- **Analysts**: Backtest prediction strategies using our deep historical data.

### 🔒 Security

- **Non-Custodial**: We never store your trading credentials. Your API keys are passed through securely on each request.
- **Geo-Compliance**: Built-in checks to ensure compliance with Polymarket's jurisdiction rules.

### ⚡ Performance

- **Edge-Cached**: Deployed on Cloudflare's global network for low-latency responses worldwide.
- **Rate Limited**: Fair usage limits to ensure stability for all users.

---

### Keywords (Internal Tagging)

Polymarket API, Prediction Markets, Betting API, Sports Data, Crypto Options, Algorithmic Trading, Real-time Odds, Election Betting Data

## 3. Documentation / "Read Me"

> **Use this for your documentation page or README:**

### Authentication

You need a **RapidAPI Key** to access all endpoints.
Add this header to your requests:
`X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>`

### Trading Authentication

To place orders or view private portfolio data, you must also provide your **Polymarket API Credentials** in the headers:

- `X-Poly-Api-Key`
- `X-Poly-Api-Secret`
- `X-Poly-Passphrase`

_Note: These are never stored on our servers._

### Quick Start Examples

**1. Search for Active Markets**

```bash
curl --request GET \
    --url 'https://predictunify.p.rapidapi.com/markets?status=active&sortBy=volume' \
    --header 'X-RapidAPI-Key: YOUR_KEY'
```

**2. Get Price History (Candlesticks)**

```bash
curl --request GET \
    --url 'https://predictunify.p.rapidapi.com/markets/{market_id}/history?interval=1h' \
    --header 'X-RapidAPI-Key: YOUR_KEY'
```

**3. Place a Buy Order**

```bash
curl --request POST \
    --url 'https://predictunify.p.rapidapi.com/orders' \
    --header 'X-RapidAPI-Key: YOUR_KEY' \
    --header 'X-Poly-Api-Key: POLY_KEY' \
    --header 'X-Poly-Api-Secret: POLY_SECRET' \
    --header 'X-Poly-Passphrase: POLY_PASSPHRASE' \
    --header 'Content-Type: application/json' \
    --data '{
        "marketId": "0x...",
        "outcomeId": "0x...",
        "side": "buy",
        "type": "limit",
        "price": 0.55,
        "size": 100
    }'
```
