//* Detectar cuando estamos viendo la página web actual

document.addEventListener('visibilitychange', () => {
  if(document.visibilityState === 'visible') {
    document.querySelector('title').textContent = 'Index'; 
  }
  else {
    document.querySelector('title').textContent = 'Regresa pe ctmr'; 
  }
})





