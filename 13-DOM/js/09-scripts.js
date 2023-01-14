//? Eliminar elementos en el DOM

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
/*
const primerEnlace = document.querySelector('a');

primerEnlace.remove();
consola.log(primerEnlace);
*/

//* Eliminando desde el padre
const navegacion = document.querySelector('.navegacion');

consola.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);