export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/meta-feed.xml") {
      return fetch(request);
    }

    const SOURCE_FEED =
      "https://example.com/path/to/facebook-feed.xml";

    const upstream = await fetch(SOURCE_FEED, {
      headers: {
        "User-Agent": "MetaBot"
      }
    });

    const headers = new Headers(upstream.headers);
    headers.set("content-type", "application/xml; charset=utf-8");
    headers.set("cache-control", "no-store");

    return new Response(upstream.body, {
      status: upstream.status,
      headers
    });
  }
};