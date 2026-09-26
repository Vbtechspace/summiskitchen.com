// Minimal service worker for Summi's Kitchen.
// Its main job is simply to exist and register a fetch handler --
// Android Chrome requires this before it will offer a real "Install app"
// (standalone, no browser bar) instead of a plain bookmark shortcut.

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  // Always go to the network; no offline caching yet.
  event.respondWith(fetch(event.request));
});
