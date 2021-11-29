const cacheName = 'news-v1';
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './index.js',
  './newsApi.js',
  './news-article.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});