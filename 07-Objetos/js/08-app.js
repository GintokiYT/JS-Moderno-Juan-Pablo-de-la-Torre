"use strict";

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};


Object.freeze(producto);
// producto.imagen = "imagen.jpg";
// producto.disponible = false;
// delete producto.disponible;

console.log(producto);
console.log(Object.isFrozen(producto));

