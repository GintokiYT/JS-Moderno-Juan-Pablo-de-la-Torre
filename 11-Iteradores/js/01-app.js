//? For Loop

//* Inicializado - condicion - Incremento
// for ( let i = 0; i < 10; i++) {
//     console.log(`Numero: ${i}`);
// }


// for ( let i = 1; i <= 20; i++ ) {
//     if ( i % 2 === 0 ) {
//         console.log(`Numero ${i} es par`);
//     } else {
//         console.log(`Numero ${i} es impar`);
//     }
// }


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.log(carrito.length);

for ( let i = 0; i < carrito.length; i++ ) {
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}