self.addEventListener("install", e => {
    // console.log("service worker changed");
    // console.log("service worked updated");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./login.css",
                "./img/pwa-icon16x16.png",
                "./img/pwa-icon24x24.png",
                "./img/pwa-icon32x32.png",
                "./img/pwa-icon64x64.png",
                "./img/pwa-icon128x128.png",
                "./img/pwa-icon256x256.png",
                "./img/pwa-icon512x512.png",
            ]);
        })
    )
})
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});