//? .filter
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//* Filtra los productos que tengan un precio mayor a 400
let resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

//* Filtra los productos que tengan un precio menor a 600
resultado = carrito.filter( producto => producto.precio < 600);
console.log(resultado);

//* Filtra los productos que sean diferentes de Audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
console.log(resultado);



