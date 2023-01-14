// Funciones como Argumentos
const suma = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

const sumaOMultiplica = fn => fn(10,20);

console.log(sumaOMultiplica(suma));
console.log(sumaOMultiplica(multiplicar));


