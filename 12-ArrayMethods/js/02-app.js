//? .findIndex para encontrar la posicion de un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach ( (mes, indice) => {
    if (mes === 'Abril'){
        console.log(`El mes ${mes} esta en la posicion ${indice}`);
    }
});


//* Encontrar le indice de abril
//! .findIndex devuelve -1 cuando no encuentra el valor
const indice = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice);


//* Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);