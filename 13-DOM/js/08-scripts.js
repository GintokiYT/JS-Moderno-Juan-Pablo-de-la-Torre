//? Traversing the DOM

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const navegacion = document.querySelector('.navegacion');
/*

consola.log(navegacion);
consola.log(navegacion.childNodes); //* Los espacios en blanco son considerados elementos
consola.log(navegacion.children);

consola.log(navegacion.children[1].nodeName);
consola.log(navegacion.children[1].nodeType);
*/

const card = document.querySelector('.card');
/*
//* Cambiando el titulo de la card

card.children[1].children[1].textContent = 'Nuevo Titulo';
consola.log(card.children[1].children[1]);

//* Cambiando la imagen de la card
card.children[0].src = 'img/hacer3  .jpg';
consola.log(card.children[0]);
*/

//* Traversing the hijo al padre
consola.log(card.parentNode);

consola.log(card);
consola.log(card.nextElementSibling);


const ultimoCard = document.querySelector('.card:last-child');
consola.log(ultimoCard);
consola.log(ultimoCard.previousElementSibling);

consola.log('------------------------');

consola.log(navegacion);    
//* Trae el primer elemento de la lista
consola.log(navegacion.firstElementChild);
//* Trae el ultimo elemento de la lista
consola.log(navegacion.lastElementChild);