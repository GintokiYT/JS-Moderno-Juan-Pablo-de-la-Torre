if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
    .then(registrado => console.log('Se instalo correctamente ', registrado))
    .catch(error => console.log('Fallo la instalación ', error));
}
else {
  console.log('service worker is not supported by this browser.');
  // alert('service worker is not supported by this browser.');
}