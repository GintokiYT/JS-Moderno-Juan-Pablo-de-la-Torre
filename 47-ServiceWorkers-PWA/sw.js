const nombreCache = 'apv-v1';

const archivo = [
  '/',
  '/index.html',
  '/error.html',
  '/css/bootstrap.css',
  '/css/styles.css',
  '/js/app.js',
  '/js/apv.js',
];

// cuando se instala el Service Worker
self.addEventListener('install', e => {
  console.log('Instalado el Service Worker');
  
  e.waitUntil(
    caches.open(nombreCache)
      .then( cache => {
        console.log('cacheando...');
        cache.addAll(archivo);
      })
  )
});

// Activar el Service Worker
self.addEventListener('activate', e => {
  console.log('Service Worker Activado');
  console.log(e);
});

// Evento Fetch para descargar archivos estatico
self.addEventListener('fetch', e => {
  console.log('Fetch...', e);

  e.respondWith(
    caches.match(e.request)
      .then( respuestaCache => {
        return respuestaCache;
      })
      .catch( () => caches.match('/error.html'))
  )
  


});