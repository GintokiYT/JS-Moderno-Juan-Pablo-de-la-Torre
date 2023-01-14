//? Que es el Event Bubbling

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    consola.log('Click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    consola.log('Click en info');
});
    
titulo.addEventListener('click', e => {
    e.stopPropagation();
    consola.log('Click en titulo');
});



