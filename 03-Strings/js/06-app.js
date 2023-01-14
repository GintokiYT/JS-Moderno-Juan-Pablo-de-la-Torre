let producto = 'Monitor 20 pulgadas';

// .repeat re va permitir repetir una cadena de texto
let texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`);

// .split dividir un String
let actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

let hobbies = 'Leer, caminar, escuchar';
console.log(hobbies.split(','));
console.log(hobbies.split(',').forEach(element => {console.log(element.trim())}));