//? forEach y .map
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

//* Diseñado para recorrer arreglos
pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`); //* forEach   
});

//* 
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//* Itera sobre el arreglo
carrito.forEach( (producto, indice) => {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
})

//* Crear un nuevo arreglo
const nuevoCarrito = carrito.map( (producto) => {
    return `${producto.nombre} - ${producto.precio * 2}`;
});

console.table(nuevoCarrito);