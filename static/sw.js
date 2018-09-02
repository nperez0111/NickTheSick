importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.07806891dba83e0e8fb935fc1537d9de.css",
    "revision": "07806891dba83e0e8fb935fc1537d9de"
  },
  {
    "url": "/_nuxt/app.fb896c56c7f09536da80.js",
    "revision": "6ae3b7cd72c944c29cbc879fc99e3eb1"
  },
  {
    "url": "/_nuxt/layouts/default.3709f706834dd728c4e3.js",
    "revision": "49bbe18c05b2e5768bc7ceb03f4421d6"
  },
  {
    "url": "/_nuxt/manifest.e17c0e18216d2e3af33f.js",
    "revision": "fb63408ed774f3d5b0ae2c77b93f6cf8"
  },
  {
    "url": "/_nuxt/pages/index.b50de9396971db7fe01d.js",
    "revision": "ef0b48f02a838a2571eac813e4cb476e"
  },
  {
    "url": "/_nuxt/vendor.1cbb64f61abd6c71e188.js",
    "revision": "107afd4f486f488ab54b141319766db4"
  },
  {
    "url": "/_nuxt/vendor.605ec13bb445ef02163b3bda1a44f165.css",
    "revision": "605ec13bb445ef02163b3bda1a44f165"
  }
], {
  "cacheId": "nickthesick",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





