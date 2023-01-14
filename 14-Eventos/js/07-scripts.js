//? Preevenir Event Bubbling con Delegation

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        consola.log('Diste click en titulo');
    }

    if (e.target.classList.contains('categoria')) {
        consola.log('Diste click en categoria');
    }

    if (e.target.classList.contains('precio')) {
        consola.log('Diste click en precio');
    }

    if (e.target.classList.contains('card')) {
        consola.log('Diste click en card');
    }
});


