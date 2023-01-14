const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};
console.log(producto);

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
delete(producto.disponible);

console.log(producto);


