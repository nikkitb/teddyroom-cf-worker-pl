export default {
  async fetch(request) {
    const response = await fetch(request);
    const contentType = (response.headers.get("content-type") || "").toLowerCase();

    if (!contentType.includes("text/html")) {
      return response;
    }

    let html = await response.text();

    html = html.replace(
      /<!-- CF_WORKER_CONSENT_INJECT -->[\s\S]*?<!-- END CF_WORKER_CONSENT_INJECT -->/gi,
      ""
    );

    html = html.replace(
      /<!-- CF_WORKER_GTM_INJECT -->[\s\S]*?<!-- END CF_WORKER_GTM_INJECT -->/gi,
      ""
    );

    html = html.replace(
      /<!-- CF_WORKER_GTM_NOSCRIPT -->[\s\S]*?<!-- END CF_WORKER_GTM_NOSCRIPT -->/gi,
      ""
    );

    const GTM_ID = "GTM-XXXXXXX";
    const COOKIEBOT_ID = "00000000-0000-0000-0000-000000000000";

    const consentInject = `
<!-- CF_WORKER_CONSENT_INJECT -->
<script data-cookieconsent="ignore">
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
</script>

<script
  id="Cookiebot-CF"
  src="https://consent.cookiebot.com/uc.js"
  data-cbid="${COOKIEBOT_ID}"
  data-blockingmode="auto"
  type="text/javascript">
</script>
<!-- END CF_WORKER_CONSENT_INJECT -->
`;

    const gtmHead = `
<!-- CF_WORKER_GTM_INJECT -->
<script data-cookieconsent="ignore">
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
</script>
<!-- END CF_WORKER_GTM_INJECT -->
`;

    const gtmBody = `
<!-- CF_WORKER_GTM_NOSCRIPT -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- END CF_WORKER_GTM_NOSCRIPT -->
`;

    html = html.replace(/<head([^>]*)>/i, `<head$1>${consentInject}`);
    html = html.replace(/<\/head>/i, `${gtmHead}</head>`);
    html = html.replace(/<body([^>]*)>/i, `<body$1>${gtmBody}`);

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