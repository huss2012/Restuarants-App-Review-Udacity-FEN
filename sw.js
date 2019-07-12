//Declearing the staticCache:
let staticCacheName = 'restaurant-review-app-cache';
//Declearing the caches the we want to cache:
let cacheToCaches= [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './js/service_worker_R.js',
];
// install step for sw:
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(cacheToCaches);
    })//End of the then part.
  );//End of waitUntill.
});//End of the install EventListener.

// activation step for sw:
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('restaurant-') &&
                 cacheName !=staticCacheName;
        })//End of the filter.
        .map(function(cacheName){
          return caches.delete(cacheName);
        })//End of the map.
      );//End of the Promise.
    })//End of the then part.
  );//End of waitUntill.
});//End of the activate EventListener.

// fetching step for sw:
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })//End of then part.
  );//End of responedWith.
});//End of the fetch EventListener.
