//? Modificar Textos o Imagenes con JS

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const encabezado = document.querySelector('.contenido-hero h1');

consola.log(encabezado); //* Si en el CSS - visibility: hidden; no lo va encontrar
consola.log(encabezado.innerText); //* si lo va encontrar
consola.log(encabezado.innerHTML); //* Se trae el HTML

//* Modificar el texto del encabezado
const heading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = heading;

//* Modificar la imagen
const imagen = document.querySelector('.card img');

imagen.src = 'img/hacer2.jpg';
consola.log(imagen);