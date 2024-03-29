
const staticCacheName = 'pre-cache-v2.3';
const dynamicCacheName = 'runtime-cache-v2.3';

// Pre Caching Assets
const precacheAssets = [
    '/',
    'css/bootstrap.min.css',
    'css/owl.carousel.min.css',
    'img/core-img/curve.png',
    'img/core-img/curve2.png',
    'img/core-img/dot-blue.png',
    'img/core-img/dot.png',
    'img/core-img/logo-small.png',
    'img/core-img/logo-white.png',
    'img/bg-img/no-internet.png',
    'img/icons/icon-128x128.png',
    'img/icons/icon-144x144.png',
    'img/icons/icon-152x152.png',
    'img/icons/icon-167x167.png',
    'img/icons/icon-180x180.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-384x384.png',
    'img/icons/icon-512x512.png',
    'img/icons/icon-72x72.png',
    'img/icons/icon-96x96.png',
    'js/bootstrap.bundle.min.js',
    'js/jquery.min.js',
    'js/pwa.js',
    'js/dark-mode-switch.js',
    'js/active.js',
    'home.html',
    'intro.html',
    'login.html',
    'manifest.json',
    'offline.html',
    'message.html',
    'cart.html',
    'pages.html',
    'settings.html',
    'style.css'
];

// Install Event
self.addEventListener('install', function (event) {
    return;

    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(precacheAssets);
        })
    );
});

// Activate Event
self.addEventListener('activate', function (event) {
    return;

    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', function (event) {
    return;

    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(response => {
                return caches.open(dynamicCacheName).then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                })
            });
        }).catch(function() {
            // Fallback Page, When No Internet Connection
            return caches.match('offline.html');
          })
    );
});