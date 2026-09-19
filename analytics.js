// Vercel serves this endpoint after Web Analytics is enabled and redeployed.
// Local previews do not report visits or request Vercel-only endpoints.
(() => {
  if (['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
      || !['https:', 'http:'].includes(location.protocol)) return;

  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
})();
