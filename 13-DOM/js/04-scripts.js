//? querySelector
const card = document.querySelector('.card');
console.log(card);

//* Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//* Selecionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//* Selecionar el hospedaje
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

//* Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);