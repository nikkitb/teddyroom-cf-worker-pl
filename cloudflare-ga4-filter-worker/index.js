export default {
  async fetch(request) {
    const ALLOWED_GA4_IDS = [
      "G-XXXXXXXXXX"
    ];

    const BLOCKED_GA4_IDS = [
      "G-YYYYYYYYYY",
      "G-ZZZZZZZZZZ"
    ];

    const url = request.url;

    const isGA4Collect =
      url.includes("google-analytics.com/g/collect");

    if (isGA4Collect) {
      const hasAllowedId = ALLOWED_GA4_IDS.some((id) => url.includes(id));
      const hasBlockedId = BLOCKED_GA4_IDS.some((id) => url.includes(id));

      if (!hasAllowedId || hasBlockedId) {
        return new Response(null, { status: 204 });
      }
    }

    return fetch(request);
  }
};