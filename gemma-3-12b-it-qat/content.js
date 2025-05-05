function redirectAmazonURL() {
  const currentURL = window.location.href;

  if (currentURL.startsWith("https://www.amazon.co.jp/exec/obidos/ASIN/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/ASIN\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/o/ASIN/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/o\/ASIN\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/exec/obidos/ISBN=")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/ISBN=/, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/o/ISBN=")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/o\/ISBN=/, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/gp/product/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/gp\/product\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/gp/product/product-description/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/gp\/product\/product-description\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/Elements-Style/dp/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/Elements-Style\/dp\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/Elements-Style/dp/product-description/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/Elements-Style\/dp\/product-description\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Rust-%E7%AC%AC2%E7%89%88-Jim-Blandy/dp/")) {
    window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp%\/\E3%83%97%E3%83%AD%E3%82%B0\E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Rust-%E7%AC%AC2%E7%89%88-Jim-Blandy\/dp\//, "https://www.amazon.co.jp/dp/"));
  } else if (currentURL.startsWith("https://www.amazon.co.jp/s?k=")) {
    // Do nothing
  } else if (currentURL.startsWith("https://www.amazon.co.jp/dp/B09KZJXDN1?tag=hatena-22&linkCode=osi&th=1&psc=1/")) {
      window.location.replace(currentURL.replace(/https:\/\/www\.amazon\.co\.jp\/dp\/B09KZJXDN1\?tag=hatena-22&linkCode=osi&th=1&psc=1\//, "https://www.amazon.co.jp/dp/B09KZJXDN1"));
  }
}

window.addEventListener("load", redirectAmazonURL);
