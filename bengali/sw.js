// Bengali App — Service Worker
// Cache-first strategy for offline support.
// Bump CACHE_VERSION to force cache refresh after major updates.
const CACHE_VERSION = 'bengali-v1';
const PRECACHE_URLS = [
  './',
  './index.html',
  './vocab.js',
  './grammar.js',
  './guide.html',
  './vocab-pack-1.json',
  './vocab-pack-2.json',
  './vocab-pack-3.json',
  './manifest.json',
];

// Install: pre-cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(PRECACHE_URLS))
  );
  // Activate immediately without waiting for existing tabs to close
  self.skipWaiting();
});

// Activate: delete old cache versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    )
  );
  // Take control of all open tabs immediately
  self.clients.claim();
});

// Fetch: cache-first for same-origin requests; network-only for third-party
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only intercept same-origin GET requests
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Google Fonts — network-first (not cached; fails gracefully offline)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      // Not in cache — fetch from network and cache the response
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
