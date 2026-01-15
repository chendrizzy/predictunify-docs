# Changelog

All notable changes to the PredictUnify API project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Comprehensive API documentation site using Docusaurus and OpenAPI.
- GitHub Actions workflow for automated documentation deployment.
- High-resolution 500x500 PNG icon for RapidAPI listing.
- Public documentation repository structure.

### Changed

- Updated README.md with professional styling and logo.
- Refactored documentation structure to separate public and internal docs.

## [1.0.0] - 2024-05-22

### Added

- **Core API**: Unified REST API for Polymarket prediction markets.
- **Market Data**: Endpoints for listing markets, getting details, orderbooks, and price history.
- **Trading**: Secure order placement and management (limit/market orders).
- **Portfolio**: Real-time position tracking and balance checking.
- **Authentication**: RapidAPI integration with tiered access control (Basic/Pro).
- **Security**: Non-custodial credential pass-through architecture.
- **Infrastructure**: Cloudflare Workers deployment with Upstash Redis caching.

### Fixed

- Resolved dependency issues with `axios` and `@polymarket/clob-client`.
- Fixed deployment configuration for `workers.dev` subdomain.
