//? Generar HTML con Javascript

//! Funcion para ejecutar el consolo.log
//TODO: Al ejecutar el consolo.log, no se muestra los datos del DOM
const consola = {
    log: (info) => setTimeout(() => console.log(info), 100),
};  
//! Fin de la funcion consola

//* Inicio de la sesión de clase
const enlace = document.createElement('A'); 

//* Agregandole el texto
enlace.textContent = 'Nuevo Enlace';
//* Agregandole el href
enlace.href = '#';
//* Agregando el target
enlace.target = '_blank';
//* Agregandole el atributo
enlace.setAttribute('data-enlace', 'nuevo-enlace');
//* Agregando una clase
enlace.classList.add('alguna-clase');
//* Agregando una funcion
enlace.onclick = miFunction;

function miFunction(){
    alert('Diste click en el enlace');
}

consola.log(enlace);

//* Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
/*
///! Agrega al final de la navegacion
navegacion.appendChild(enlace);
*/

//! Agregando enlace despues de un elemento
navegacion.insertBefore(enlace, navegacion.children[1]);

consola.log(navegacion);


//* Crear los parrafos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add = ('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//* Crear DIV con la clase info
const info = document.createElement('DIV');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//* Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer1.jpg';

//* Creando la CARD
const card = document.createElement('DIV');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

consola.log(card);

//* Agregando al DOM
const contenedor = document.querySelector('.hacer .contenedor-cards');

setTimeout(() => contenedor.appendChild(card), 5000);
