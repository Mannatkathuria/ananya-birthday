export function trackPage(pageName) {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_title: pageName,
  });
}

export function trackClick(type, label) {
  if (!window.gtag) return;
  window.gtag("event", "click", {
    event_category: type,
    event_label: label,
  });
}
