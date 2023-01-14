let producto = '       Monitor 20 pulgadas     ';

console.log(producto);
// Eliminar los espacios en blanco del inicio
console.log(producto.trimStart());
// Eliminar los espacios en blanco del final
console.log(producto.trimEnd());
// Eliminar los espacios en blanco del inicio y del final
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());