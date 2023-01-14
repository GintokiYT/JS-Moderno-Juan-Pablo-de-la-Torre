//? .find
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//* con un forEach
let resultado = 0;
carrito.forEach( (producto, indice) => {
    if (producto.nombre === 'Tablet') {
        resultado = carrito[indice];
    }
});
console.log(resultado);

//* .find te va retoran el primer elemento que cumpla la condicion
const resultado2 = carrito.find( producto => producto.nombre === 'Celular');
console.log(resultado2);


