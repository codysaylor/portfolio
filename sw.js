self.addEventListener('install', function(event) {
  // Precache static assets
  console.log('Service worker installed');
  event.waitUntil(
  caches.open('static')
    .then(function(cache) {
      cache.addAll([
        '/',
        '/bitcoin/',
        '/graphic/',
        '/movie/',
        '/notes/',
        '/rocky/',
        '/photo/',
        '/notes/music/',
        '/notes/videos/',
        '/notes/images/',
        '/notes/plugins/',
        '/notes/browsers/',
        '/notes/speed-up-youtube-avoid-isp-throttling/',
        '/notes/comparing-codepen-jsfiddle-cssdeck-liveweave-jsbin-dabblet/',
        '/notes/fpv-with-your-phone/',
        '/notes/accessibility/',
        '/untilled/',
        '/style.css',
        'https://code.jquery.com/jquery-2.1.1.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/smoothState.js/0.7.2/jquery.smoothState.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.min.js',
        'https://fonts.googleapis.com/css?family=Poiret+One|Raleway:300,400|Material+Icons|Roboto'
      ])
    })
  );
});
self.addEventListener('activate', function() {
  console.log('Service worker activated');
});
self.addEventListener('fetch', function(e) {
  // Use cache if exists
  e.respondWith(
    caches.match(e.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(e.request)
        }
      })
  );
});
