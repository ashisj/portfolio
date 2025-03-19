const CACHE_NAME = 'portfolio-cache-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/portfolio/manifest.json',
  '/portfolio/aj.png',  
  '/portfolio/src/main.tsx',
  '/portfolio/src/App.tsx',
  '/portfolio/src/index.css'
];

// Cache static assets during installation
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE)
    ])
  );
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map(name => caches.delete(name))
      );
    })
  );
});

// Network-first strategy for API requests, Cache-first for static assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request)
        .then(response => response || fetch(request))
    );
    return;
  }

  // Handle API requests and dynamic content
  event.respondWith(
    fetch(request)
      .then(response => {
        // Clone the response before using it
        const responseToCache = response.clone();

        // Cache successful responses
        if (response.ok) {
          caches.open(DYNAMIC_CACHE)
            .then(cache => cache.put(request, responseToCache));
        }

        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(request);
      })
  );
}); 