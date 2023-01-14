//* SETs

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');

// Obtener el tamaño de carrito
console.log(carrito.size);

// Ver si existe un elemento en el carrito
console.log(carrito.has('Disco 1'));
console.log(carrito.has('Disco 3'));

// Eliminar un elemento del carrito
carrito.delete('Disco 2');

// Eliminar todos los elementos del carrito
carrito.clear();

// Iterables 
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');
carrito.add('Disco 4');
carrito.add('Disco 5');

carrito.forEach( (producto, index, pertenece) => {
  console.log(`Indice: ${index} - Producto: ${producto} - Pertenece: ${pertenece}`);
});

//* Del siguiente arreglo elimina los duplicados

let numeros = [10,20,30,40,50,10,20];

const eliminarDuplicados = (arreglo) => {
  return [...new Set(arreglo)];
}

console.log(numeros);

// Eliminamos los duplicados con la funcion
numeros = eliminarDuplicados(numeros);

console.log(numeros);