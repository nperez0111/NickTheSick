importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nickthesick",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.34a574c9f8d0fe671a10.js",
    "revision": "5673047dad8b2a2ff48e8b4ba2a54e82"
  },
  {
    "url": "/_nuxt/app.9029c3bf869a5e41f5d774ece5dc1d8e.css",
    "revision": "9029c3bf869a5e41f5d774ece5dc1d8e"
  },
  {
    "url": "/_nuxt/layouts/default.3709f706834dd728c4e3.js",
    "revision": "49bbe18c05b2e5768bc7ceb03f4421d6"
  },
  {
    "url": "/_nuxt/manifest.134d9b9c2a05f0047aff.js",
    "revision": "00cb83133c1b09bb35d0c003eefa00c3"
  },
  {
    "url": "/_nuxt/pages/index.6d7f78b41cda5f4138b0.js",
    "revision": "2c0a1dde26d60187844da72a763178ee"
  },
  {
    "url": "/_nuxt/vendor.66dc8c5a7aa440afd37a19ea7c0ec8e9.css",
    "revision": "66dc8c5a7aa440afd37a19ea7c0ec8e9"
  },
  {
    "url": "/_nuxt/vendor.f4329f44d5d6081c4f03.js",
    "revision": "e31b76ec91b31e0262e01e8670e9868b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

