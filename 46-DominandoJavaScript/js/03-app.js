// Coercion
//? La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es implícita mientras que la conversión puede ser implícita o explícita.

const numero1 = 20;
const numero2 = '40';

//* Coercion implicita
console.log(numero1 + numero2);

//* Coercion explicita
console.log(Number(numero2));
console.log(numero1.toString());

const pedidos = [1,2,3,4];
console.log(pedidos.toString());
console.log(JSON.stringify(pedidos));


