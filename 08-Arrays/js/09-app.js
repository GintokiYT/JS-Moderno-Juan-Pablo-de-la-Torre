const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.table(carrito);


console.warn('for')
for(let i = 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}


console.warn('forEach')
carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
})