// ? Arrow functions en un forEach y map
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// ! map crea un nuevo arreglo
const nuevoArreglo = carrito.map( (producto) => {
    return `nombre: ${producto.nombre} - precio: ${producto.precio}`;
});

// ! forEach itera un arreglo
carrito.forEach( (producto) => {
    console.table(`nombre: ${producto.nombre} - precio: ${producto.precio}`);
});

console.table(nuevoArreglo);

// ? Incrementa en 20% el precio de todos los productos que inicien con la letra T
const nuevoArreglo2 = carrito.map( (producto) => {
    if (producto.nombre.charAt(0) === 'T') {
        return `nombre: ${producto.nombre} - precio: ${producto.precio * 1.2}`;
    }
    return `nombre: ${producto.nombre} - precio: ${producto.precio}`;
});

console.warn('Se incremento en 20% todos los productos que ')
console.table(nuevoArreglo2);
