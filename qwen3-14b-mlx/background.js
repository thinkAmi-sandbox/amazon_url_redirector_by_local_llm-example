chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    
    // Skip if already in dp/ format
    if (/^https:\/\/www\.amazon\.co\.jp\/dp\/[a-zA-Z0-9]+$/.test(url)) {
      return {cancel: false};
    }
    
    const patterns = [
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/ASIN\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/o\/ASIN\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/ISBN=([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/ISBN%3D([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/o\/ISBN=([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/tg\/detail\/-\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/exec\/obidos\/tg\/detail\/-\/Elements-Style\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/o\/tg\/detail\/-\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/o\/tg\/detail\/-\/Elements-Style\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/gp\/product\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/gp\/product\/product-description\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/Elements-Style\/dp\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/Elements-Style\/dp\/product-description\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$1"
      },
      { 
        regex: /^https:\/\/www\.amazon\.co\.jp\/(.*?)\/dp\/([a-zA-Z0-9]+)$/,
        redirect: "https://www.amazon.co.jp/dp/$2"
      }
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern.regex);
      if (match && match[1]) {
        return {redirectUrl: pattern.redirect};
      }
    }
    
    return {cancel: false};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
