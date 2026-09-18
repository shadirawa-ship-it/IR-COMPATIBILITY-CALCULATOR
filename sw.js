/*
  IR Compatibility Calculator - Service Worker
    Copyright © 2026 shadirawa-ship-it
      Licensed under CC BY-NC-ND 4.0
        
          Educational reference tool for interventional radiology
            NOT for clinical decision-making
            */
const CACHE_NAME = 'ir-trainer-v3.6.0';
const SCOPE = self.registration.scope;

const abs = p => new URL(p, SCOPE).toString();

const ASSETS = [
  './index.html',
  './data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
].map(abs);

// Resources that must always reflect the latest deploy. Served network-first so
// updates to the device database go live on the next load instead of being
// pinned to whatever the browser cached on an earlier visit.
const NETWORK_FIRST = [
  abs('./index.html'),
  abs('./data.js'),
  abs('./training.html')
];

const isNetworkFirst = url =>
  NETWORK_FIRST.includes(url) || url.endsWith('/data.js') || url.endsWith('/');

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;

  // Only handle same-origin GET requests; let everything else pass through untouched.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  const url = new URL(req.url).toString();

  // --- Network-first: fresh data wins, cache is the offline fallback ---
  if (req.mode === 'navigate' || isNetworkFirst(url)) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then(cached =>
            cached ||
            (req.mode === 'navigate'
              ? caches.match(abs('./index.html'))
              : Response.error())
          )
        )
    );
    return;
  }

  // --- Cache-first: static assets (icons, manifest) ---
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, clone));
        return res;
      }).catch(() => Response.error());
    })
  );
});
