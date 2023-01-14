// Probar 2 valores

function suma(a,b) {
  return a + b;
}

function resta(a,b) { 
  return a - b;
}

let resultado = suma(2,2);

let esperado = 3;

if(resultado !== esperado){
  console.error(`El resultado ${resultado} es diferente a lo esperado`);
}
else{
  console.log('La prueba paso correctamente');
} 

let resultado2 = resta(10,5);
let esperado2 = 5;

if(resultado2 !== esperado2){
  console.error(`El resultado ${resultado2} es diferente a lo esperado`);
}
else{
  console.log('La prueba paso correctamente');
} 
