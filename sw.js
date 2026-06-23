// Service Worker EVVO
// Não intercepta o admin.html
const CACHE = 'evvo-v1';

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  
  // NUNCA intercepta o admin
  if (url.pathname.includes('admin') || url.pathname.includes('painel')) {
    return;
  }
  
  // Para todo o resto, busca da rede normalmente
  event.respondWith(fetch(event.request));
});

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});
