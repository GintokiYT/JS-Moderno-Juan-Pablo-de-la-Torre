function suma(a,b) {
  return a + b;
}

function resta(a,b) { 
  return a - b;
}

let resultado = suma(1,2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = resta(10,5);
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEquals(resultado);

function expected(esperado) {
  return {
    toBe(resultado) {
      if(resultado !== esperado) {
        console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`);
      }
      else {
        console.log('La prueba paso correctamente');
      }
    },
    toEquals(resultado) {
      if(resultado !== esperado) {
        console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`);
      }
      else {
        console.log('La prueba paso correctamente');
      }
    }
  }
}
