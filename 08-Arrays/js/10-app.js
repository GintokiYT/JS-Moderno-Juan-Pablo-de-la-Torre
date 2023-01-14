const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

console.warn('forEach');
carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
});

// MAP - Crea un nuevo arreglo
console.warn('map');
const carritoNuevo = carrito.map(producto => { return { name: producto.nombre}});

console.table(carritoNuevo);

// --------------------------------------------------

const products = [
    { name: 'Monitor 27 Pulgadas', price: 500, discount: true }
];


const products2 = products.map(product => {
    return {
        name: product.name,
        price: product.price,
        fecha: new Date().toLocaleDateString()
    }
});

console.table(products2);

let fecha = new Date().toLocaleDateString();
console.log(typeof fecha);