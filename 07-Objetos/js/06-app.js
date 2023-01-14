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

const {nombre, informacion: {fabricacion : {pais}}} = producto;

console.log(nombre);
console.log(pais);   
