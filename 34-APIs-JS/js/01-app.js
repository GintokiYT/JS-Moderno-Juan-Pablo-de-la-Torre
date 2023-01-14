// Notificacion API

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
  Notification
    .requestPermission() 
    .then( result => {
      console.log(`El resultado es: ${result}`);
    })
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
  if(Notification.permission === 'granted') {
    const notificacion = new Notification('Esta es la notificación', {
      icon: 'img/ccj.png', 
      body: 'Codigo con Juan aprende en proyectos reales',
    });

    notificacion.onclick = () => {
      window.open('https://www.google.com');
    }
  }
});