# Cloudflare Workers for E-commerce Tracking Infrastructure

A collection of Cloudflare Worker examples inspired by real-world e-commerce analytics, consent management, product feed delivery and tracking infrastructure challenges.
This project demonstrates how Cloudflare Workers can be used to manage analytics, consent, product feeds and tracking governance directly at the edge.

## Background

Many e-commerce platforms such as Shoper support multiple languages, currencies and markets from a single store instance, but provide only a shared tracking and analytics environment.

This creates several challenges:

* Analytics data from different markets becomes mixed.
* Google Ads and Meta Ads receive combined signals from multiple countries.
* Product feeds often require additional segmentation by language, currency or shipping configuration.
* Multi-domain analytics setups become difficult to maintain.
* Server-side tracking implementations require additional customization.
* Tracking migrations are limited by platform restrictions.
* Access to store templates and tracking infrastructure may be restricted.

To overcome these limitations, Cloudflare Workers can be used as an edge layer between visitors and the storefront.

This approach makes it possible to:

* Control analytics requests.
* Separate tracking infrastructure between markets.
* Inject consent and tag management solutions.
* Proxy product feeds.
* Modify HTML responses without changing the platform backend.
* Prepare stores for server-side tracking and custom analytics implementations.

## Projects

### cloudflare-ga4-filter-worker

Filters unwanted Google Analytics requests and validates measurement IDs before requests reach analytics endpoints.

**Features**

* GA4 request filtering
* Measurement ID validation
* Traffic quality control
* Lightweight edge processing

### cloudflare-meta-feed-proxy

Proxies XML product feeds for advertising and marketplace platforms.

**Features**

* XML feed proxying
* Custom response headers
* MetaBot forwarding
* Feed delivery support

### cloudflare-consent-gtm-injector

Injects consent management and analytics infrastructure into HTML responses.

**Features**

* Cookiebot injection
* Google Consent Mode defaults
* GTM injection
* Duplicate script cleanup
* HTML response rewriting

### cloudflare-html-rewriter

Modifies storefront HTML responses at the edge to support tracking migrations and controlled script deployment.

**Features**

* HTML response rewriting
* Legacy tracking cleanup
* Script replacement
* Controlled tracking deployment
* Edge-based infrastructure management

## Example Use Cases

* E-commerce analytics infrastructure
* Multi-market tracking environments
* Multi-domain analytics implementations
* Consent-first analytics implementation
* Product feed delivery
* Tracking migration projects
* Edge-based tracking management
* Platforms with limited template access
* Server-side tracking preparation
* Custom analytics deployment

## Technology Stack

* Cloudflare Workers
* JavaScript
* Google Analytics 4 (GA4)
* Google Tag Manager (GTM)
* Server-side Google Tag Manager (sGTM)
* Meta Conversions API (Meta CAPI)
* Cookiebot
* Google Consent Mode
* Meta Catalog Feeds
* XML Product Feeds

## Related Topics

This repository may be useful for developers and marketers working with:

* Cloudflare Workers for Google Tag Manager
* Cloudflare Workers for Google Analytics 4
* Cloudflare Workers for Consent Mode
* Cloudflare Workers for Meta Conversions API
* Cookiebot integration through Cloudflare
* Meta Catalog Feed Proxy
* Product Feed Proxy
* Multi-language e-commerce tracking
* Multi-domain analytics implementation
* GA4 measurement ID filtering
* Edge-based tracking infrastructure
* Google Tag Manager injection
* HTML response rewriting
* Tracking migration projects
* E-commerce analytics architecture
* Server-side Google Tag Manager (sGTM)
* Meta Conversions API (CAPI)
* Custom analytics implementations
* Headless e-commerce tracking
* Headless Shoper implementations
* Shoper analytics customization
* Shoper GTM integration
* Shoper GA4 integration
* Shoper Meta Pixel integration
* Shoper Meta Conversions API integration
* Shoper server-side tracking
* Shoper sGTM implementation
* Shoper product feeds
* Shoper multi-domain stores
* Shoper multi-language stores
* Shoper multi-currency stores
* Shoper tracking customization
* E-commerce tracking governance

## Disclaimer

All examples are generalized and sanitized for demonstration purposes.
Production identifiers, domains, tracking IDs and business-specific configurations have been removed or replaced with placeholders.

## Author

Nikita Bashurov
