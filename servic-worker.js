const CACHE_NAME = 'ashis-portfolio-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    fetch('/asset-manifest.json')
      .then(response => response.json())
      .then(assets => {
        const urlsToCache = Object.values(assets);
        return caches.open(CACHE_NAME)
          .then(cache => cache.addAll(urlsToCache));
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});