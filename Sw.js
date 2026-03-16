// ══════════════════════════════════════════════
//  SketchForge Pro — Service Worker
//  Caches everything for full offline use
// ══════════════════════════════════════════════

const CACHE_NAME = 'sketchforge-v1';
const CACHE_VERSION = 'sketchforge-v1.0.0';

// Files to cache on install
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
];

// Google Fonts to cache (so app looks good offline)
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Space+Grotesk:wght@400;500;600&display=swap',
];

// ── INSTALL ── cache all core assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing SketchForge v1...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache core app files
      await cache.addAll(CORE_ASSETS);

      // Try to cache fonts (non-blocking — fails gracefully if offline during install)
      try {
        await cache.addAll(FONT_URLS);
      } catch (e) {
        console.warn('[SW] Could not cache fonts (offline?):', e.message);
      }

      console.log('[SW] Core assets cached');
    })
  );
  // Activate immediately without waiting for old tabs to close
  self.skipWaiting();
});

// ── ACTIVATE ── clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  // Take control of all open tabs immediately
  self.clients.claim();
});

// ── FETCH ── serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Chrome extensions
  if (url.protocol === 'chrome-extension:') return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Cache hit — serve immediately
        // Background-refresh for HTML (stale-while-revalidate)
        if (request.headers.get('accept')?.includes('text/html')) {
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, networkResponse.clone());
                });
              }
            })
            .catch(() => {}); // offline — that's fine, we served from cache
        }
        return cachedResponse;
      }

      // Cache miss — fetch from network and cache it
      return fetch(request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }

          // Cache this resource for next time
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          // Network failed + not in cache
          // For HTML pages return the app shell
          if (request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
          // For everything else return a simple offline response
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
    })
  );
});

// ── MESSAGE ── allow app to send commands to SW
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  if (event.data === 'clearCache') {
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0]?.postMessage({ success: true });
    });
  }
});