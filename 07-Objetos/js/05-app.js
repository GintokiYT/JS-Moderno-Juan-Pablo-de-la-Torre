const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'EEUU'
        }
    }
};

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion.pais);

