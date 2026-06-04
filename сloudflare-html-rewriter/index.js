export default {
  async fetch(request) {
    const response = await fetch(request);
    const contentType = (response.headers.get("content-type") || "").toLowerCase();

    if (!contentType.includes("text/html")) {
      return response;
    }

    let html = await response.text();

    html = html.replace(
      /<script\b[^>]*>[\s\S]*?google_tags_first_party[\s\S]*?<\/script>/gi,
      ""
    );

    html = html.replace(
      /<!-- CF_WORKER_INJECT[\s\S]*?END CF_WORKER_INJECT -->/gi,
      ""
    );

    html = html.replace(
      /<script\b[^>]*id=["']Cookiebot-CF["'][\s\S]*?<\/script>/gi,
      ""
    );

    const headers = new Headers(response.headers);
    headers.delete("content-length");
    headers.delete("content-encoding");
    headers.set("cache-control", "no-store");

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};