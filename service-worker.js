const CACHE_NAME = "mysets-v5";
const CORE = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/supabase-config.js",
  "./js/app.js",
  "./vendor/chart.umd.js",
  "./vendor/supabase.js",
  "./manifest.json",
  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/logo-full.svg",
];
// Origens externas que podem ser guardadas em cache (apenas fontes do Google).
const CACHEABLE_ORIGINS = [
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  // Supabase, YouTube, vídeos de terceiros etc. passam direto pela rede.
  if (!sameOrigin && !CACHEABLE_ORIGINS.includes(url.origin)) return;
  // Requisições parciais (Range) não podem ser guardadas em cache.
  if (req.headers.has("range")) return;

  event.respondWith(
    fetch(req)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(req, copy))
            .catch(() => {});
        }
        return response;
      })
      .catch(() =>
        caches.match(req).then(
          (cached) =>
            cached ||
            caches.match(req, { ignoreSearch: true }).then(
              (noSearch) =>
                noSearch ||
                (req.mode === "navigate"
                  ? caches.match("./index.html")
                  : Response.error()),
            ),
        ),
      ),
  );
});
