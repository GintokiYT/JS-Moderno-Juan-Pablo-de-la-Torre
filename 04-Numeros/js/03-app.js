let resultado;

// PI
resultado = Math.PI;
console.log(resultado);
// Redondear
resultado = Math.round(2.5);
console.log(resultado);
// Redondear hacia abajo
resultado = Math.floor(2.5);
console.log(resultado);
// Redondear hacia arriba
resultado = Math.ceil(2.5);
console.log(resultado);
// Raiz Cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// Absoluto
resultado = Math.abs(-500);
console.log(resultado);
// Potencia
resultado = Math.pow(8, 2);
console.log(resultado);
// Minimo
resultado = Math.min(2, 5, -1, 10);
console.log(resultado);
// Maximo
resultado = Math.max(2, 5, -1, 10);
console.log(resultado);
// Aleatorio

console.warn('Este es un mensaje de advertencia');
let n = 20;
while(n > 0){
    resultado = Math.floor((Math.random()*100)+1);
    console.log(resultado);
    n--;
}