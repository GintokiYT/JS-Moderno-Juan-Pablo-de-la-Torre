//? Eventos sobre los inputs

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const busqueda = document.querySelector('.busqueda');

/*Comentario
//! El evento keydown se ejecuta cuando se presiona una tecla
busqueda.addEventListener('keydown', () => {
    consola.log('se presiono una tecla');
});

//! El evento keyup se ejecuta cuando se suelta una tecla
busqueda.addEventListener('keyup', () => {
    consola.log('se suelta una tecla');
});

//! El evento blur se ejecuta cuando se pierde el foco
busqueda.addEventListener('blur', () => {
    consola.log('se quita el foco del input');
});
*/

//! El evento input se ejecuta cuando se escribe en el input
busqueda.addEventListener('input', (e) => {  
    // consola.log(e.type);
    // consola.log(e.target);
    // consola.log(e.target.value);
    if (e.target.value === '') {
        consola.log('fallo la validación');
    }
});
