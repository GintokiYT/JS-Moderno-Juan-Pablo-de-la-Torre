//? Cambiando el CSS con Javascript

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
// const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase');

card.classList.remove('card');

consola.log(card.classList);
