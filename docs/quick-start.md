---
sidebar_position: 2
---

# Quick Start

Get up and running with the PredictUnify API in minutes.

## Prerequisites

- A **RapidAPI Account**
- A **Polymarket Account** (for trading)
- `curl` or any HTTP client

## 1. Get your API Key

1.  Go to the **[PredictUnify RapidAPI Page](https://rapidapi.com/chendrizzy/api/predictunify)**.
2.  Subscribe to a plan (Basic is free for testing).
3.  Copy your `X-RapidAPI-Key`.

## 2. Test Connection

Run this command to check if everything is working:

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/health' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
	--header 'X-RapidAPI-Host: predictunify.p.rapidapi.com'
```

Response:

```json
{
  "status": "healthy",
  "timestamp": "2023-10-27T10:00:00Z"
}
```

## 3. Search Markets

Find active markets sorted by volume:

```bash
curl --request GET \
	--url 'https://predictunify.p.rapidapi.com/markets?status=active&sortBy=volume&limit=5' \
	--header 'X-RapidAPI-Key: <YOUR_RAPIDAPI_KEY>' \
	--header 'X-RapidAPI-Host: predictunify.p.rapidapi.com'
```

## 4. Place an Order (Pro Tier)

To place a trade, you need your Polymarket credentials.

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

:::info
Your Polymarket credentials are passed securely to the exchange and are **never stored** on our servers.
:::
