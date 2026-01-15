# API Reference

This page documents the REST API endpoints for **PredictUnify**.

Base URL: `https://predictunify.p.rapidapi.com`

---

## Authentication

All requests require the following header:

- **`X-RapidAPI-Key`**: Your RapidAPI subscription key.

Paid endpoints (Orders, Portfolio) additionally require Polymarket credentials:

- **`X-Poly-Api-Key`**: Polymarket API Key
- **`X-Poly-Api-Secret`**: Polymarket API Secret
- **`X-Poly-Passphrase`**: Polymarket Passphrase

---

## Markets

### List Markets

`GET /markets`

Search and filter prediction markets.

**Parameters**

| Name       | Type    | In    | Description                                                |
| :--------- | :------ | :---- | :--------------------------------------------------------- |
| `search`   | string  | query | Search query for market questions                          |
| `category` | string  | query | Filter by: `politics`, `sports`, `crypto`, `entertainment` |
| `status`   | string  | query | `active` (default), `resolved`, `upcoming`                 |
| `sortBy`   | string  | query | `volume` (default), `liquidity`, `createdAt`               |
| `page`     | integer | query | Page number (default: 1)                                   |
| `limit`    | integer | query | Items per page (default: 20)                               |

**Example Request**

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/markets?status=active&sortBy=volume' \
	--header 'X-RapidAPI-Key: YOUR_KEY'
```

### Get Market Details

`GET /markets/{marketId}`

Get detailed metadata for a single market.

**Parameters**

| Name       | Type   | In   | Description                 |
| :--------- | :----- | :--- | :-------------------------- |
| `marketId` | string | path | The unique ID of the market |

### Get Orderbook

`GET /markets/{marketId}/orderbook`

Get live bids and asks.

**Parameters**

| Name        | Type    | In    | Description                                                |
| :---------- | :------ | :---- | :--------------------------------------------------------- |
| `marketId`  | string  | path  | The unique ID of the market                                |
| `outcomeId` | string  | query | **Required**. The specific outcome ID to get orderbook for |
| `depth`     | integer | query | Number of price levels (default: 10)                       |

### Get Price History

`GET /markets/{marketId}/history`

Get OHLCV candlestick data.

**Parameters**

| Name        | Type    | In    | Description                                       |
| :---------- | :------ | :---- | :------------------------------------------------ |
| `marketId`  | string  | path  | The unique ID of the market                       |
| `outcomeId` | string  | query | **Required**. The outcome ID                      |
| `interval`  | string  | query | **Required**. `1m`, `5m`, `15m`, `1h`, `4h`, `1d` |
| `limit`     | integer | query | Max candles (default: 100)                        |

---

## Orders

:::warning Pro Tier Only
These endpoints require a **Pro** or **Ultra** subscription and Polymarket credentials.
:::

### Place Order

`POST /orders`

Place a new limit or market order.

**Body Parameters**

| Name        | Type   | Required | Description                             |
| :---------- | :----- | :------- | :-------------------------------------- |
| `marketId`  | string | Yes      | Market ID                               |
| `outcomeId` | string | Yes      | Outcome ID                              |
| `side`      | string | Yes      | `buy` or `sell`                         |
| `type`      | string | Yes      | `limit` or `market`                     |
| `size`      | number | Yes      | Amount in USDC (min $5)                 |
| `price`     | number | No       | Required for limit orders (0.01 - 0.99) |

**Example Request**

```bash
curl --request POST \
	--url 'https://predictunify.p.rapidapi.com/orders' \
	--header 'X-RapidAPI-Key: YOUR_KEY' \
	--header 'X-Poly-Api-Key: POLY_KEY' \
	--header 'X-Poly-Api-Secret: POLY_SECRET' \
	--header 'X-Poly-Passphrase: POLY_PHRASE' \
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

### List Orders

`GET /orders`

Get your open and historical orders.

**Parameters**

| Name       | Type   | In    | Description                                    |
| :--------- | :----- | :---- | :--------------------------------------------- |
| `status`   | string | query | `open` (default), `filled`, `cancelled`, `all` |
| `marketId` | string | query | Filter by market                               |

### Cancel Order

`DELETE /orders/{orderId}`

Cancel an open order.

---

## Portfolio

:::warning Pro Tier Only
These endpoints require a **Pro** or **Ultra** subscription.
:::

### Get Positions

`GET /portfolio/positions`

Get all your open positions and their current P&L.

### Get Balance

`GET /portfolio/balance`

Get your available (collateral) and locked USDC balance.
