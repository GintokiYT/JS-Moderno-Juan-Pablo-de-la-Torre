const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};

// const nombre = producto.nombre;
// console.log(nombre);

const {nombre, precio, disponible, noExiste} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);

const {nombre: name, precio: price, disponible: available} = producto;

console.log(name);
console.log(price);
console.log(available);
