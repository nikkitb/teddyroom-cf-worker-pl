# Teddy Room Cloudflare Workers

Collection of Cloudflare Worker examples inspired by real-world e-commerce analytics, consent management and product feed delivery scenarios.
The project demonstrates how Cloudflare Workers can be used to manage tracking infrastructure, product feeds and analytics governance directly at the edge.

## Projects

### cloudflare-ga4-filter-worker

Filters unwanted Google Analytics requests and validates measurement IDs before requests reach analytics endpoints.

Features:
* GA4 request filtering
* Measurement ID validation
* Traffic quality control
* Lightweight edge processing

### cloudflare-meta-feed-proxy

Proxies XML product feeds for advertising and marketplace platforms.

Features:
* XML feed proxying
* Custom response headers
* MetaBot forwarding
* Feed delivery support

### cloudflare-consent-gtm-injector

Injects consent management and analytics infrastructure into HTML responses.

Features:
* Cookiebot injection
* Google Consent Mode defaults
* GTM injection
* Duplicate script cleanup
* HTML response rewriting

## Example Use Cases

* E-commerce analytics infrastructure
* Multi-domain tracking environments
* Consent-first analytics implementation
* Product feed delivery
* Tracking migration projects
* Edge-based tracking management
* Platforms with limited template access

## Technology Stack

* Cloudflare Workers
* JavaScript
* Google Analytics 4
* Google Tag Manager
* Cookiebot
* Meta Catalog Feeds

## Disclaimer

All examples are generalized and sanitized for demonstration purposes.
Production identifiers, domains, tracking IDs and business-specific configurations have been removed or replaced with placeholders.

## Author

Nikita Bashurov
