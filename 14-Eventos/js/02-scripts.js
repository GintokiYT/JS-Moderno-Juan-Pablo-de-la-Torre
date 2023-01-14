//? Eventos con el mouse

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const nav = document.querySelector('.navegacion');

//* Registrar un evento
nav.addEventListener('click', () => {
    consola.log('Click en el nav');
});

nav.addEventListener('mouseenter', () => {
    consola.log('Mouse entro en el nav');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    consola.log('Mouse salio del nav');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', () => {
    consola.log('Doble click en el nav');
});


