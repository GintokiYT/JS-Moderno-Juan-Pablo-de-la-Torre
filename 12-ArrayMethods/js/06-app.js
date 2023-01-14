//? .every
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//* Todos los elementos de un arreglo debe cumplir la condicion para que retorne true
//! Todo se tiene que cumplir
const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado);

//! Almenos uno se debe cumplir
const resultado2 = carrito.some( producto => producto.precio < 1000);
console.log(resultado2);