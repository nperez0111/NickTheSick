importScripts('/NickTheSick/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/NickTheSick/_nuxt/app.20e7d68c5a5dbe734d5b7ac2a5f88c9e.css",
    "revision": "20e7d68c5a5dbe734d5b7ac2a5f88c9e"
  },
  {
    "url": "/NickTheSick/_nuxt/app.81da2ca0d3d87369f896.js",
    "revision": "529c19b8b9c6a697049fabaf82eb5d4c"
  },
  {
    "url": "/NickTheSick/_nuxt/layouts/default.3709f706834dd728c4e3.js",
    "revision": "49bbe18c05b2e5768bc7ceb03f4421d6"
  },
  {
    "url": "/NickTheSick/_nuxt/manifest.5d123ccb624b0e21346b.js",
    "revision": "b819afe21cdb8a5d0837505f0e3a2bc3"
  },
  {
    "url": "/NickTheSick/_nuxt/pages/index.0ffa7482e475df91df4f.js",
    "revision": "0a097265020ca3b916c630b010c59dbc"
  },
  {
    "url": "/NickTheSick/_nuxt/vendor.605ec13bb445ef02163b3bda1a44f165.css",
    "revision": "605ec13bb445ef02163b3bda1a44f165"
  },
  {
    "url": "/NickTheSick/_nuxt/vendor.cbb4de8b8ee645c7871d.js",
    "revision": "ee7703fe4ac4aeb902ab175d123d4554"
  }
], {
  "cacheId": "nickthesick",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/NickTheSick/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/NickTheSick/.*'), workbox.strategies.networkFirst({}), 'GET')





