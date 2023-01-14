//* Detectar si hay conexion a internet

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
  if(navigator.onLine) {
    alert('Estas conectado a internet');
    console.log('Estas conectado a internet');
  }
  else {
    alert('No estas conectado a internet');
    console.log('No estas conectado a internet'); 
  }
}




