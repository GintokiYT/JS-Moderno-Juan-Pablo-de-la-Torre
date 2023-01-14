"use strict";

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};

// No te permite agregar o eliminar las propiedades pero si te permite modificarlos
Object.seal(producto);
// producto.imagen = "imagen.jpg";
producto.disponible = false;
// delete producto.disponible;

console.log(producto);
console.log(Object.isSealed(producto));


// 32. Un investigador se encuentra estudiando el crecimiento de una población de mosquitos. En la primera semana se observa un total de 200 mosquitos, en la segunda semana se observa un total de 800 y en las siguientes semanas se sigue cuadriplicando la poblacion semanalmente. ¿Cuantos mosquitos habra en la quinta semana?

// function calcularPoblacion(poblacionInicial, semanas) {
//     let poblacion = poblacionInicial;
//     let contador = 1;
//     while (contador < semanas) {
//         poblacion = poblacion * 4;
//         contador++;
//     }
//     return poblacion;
// }

// console.log(calcularPoblacion(200, 5));