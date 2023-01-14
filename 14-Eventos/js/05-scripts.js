//? Eventos al dar scroll con el mouse

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 660){
        consola.log('El elemento ya esta visible');
    }
    else {
        consola.log('Aun no, da mas scroll');
    }
});


