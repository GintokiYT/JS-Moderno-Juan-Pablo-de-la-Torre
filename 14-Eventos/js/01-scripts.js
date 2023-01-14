//? Detectar cuando el HTML esta listo

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
consola.log(1);

document.addEventListener('DOMContentLoaded', () => {
    consola.log(2);
});

consola.log(3);


