chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const url = details.url;

  // Skip if already in the short format
  if (/^https:\/\/www\.amazon\.co\.jp\/dp\/[A-Z0-9]{10}$/.test(url)) {
    return;
  }

  // Match ASIN or ISBN in the URL
  const asinMatch = url.match(/(?:ASIN|ISBN)=?([A-Z0-9]{10})(?:[&/]|$)/i);
  if (asinMatch) {
    const asin = asinMatch[1];
    chrome.tabs.update(details.tabId, { url: `https://www.amazon.co.jp/dp/${asin}` });
  }
}, { url: [{ host: "www.amazon.co.jp" }] });