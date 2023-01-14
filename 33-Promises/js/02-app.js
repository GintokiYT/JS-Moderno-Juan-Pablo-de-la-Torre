// Callback hell

const paises = [];


const nuevoPais = (pais, callback) => {
  paises.push(pais);
  console.log(`Agregado: ${pais}`);
  callback();
}

const mostrarPais = () => {
  console.log(paises);
}

const iniciarCallbackHell = () => {
  setTimeout(() => {
    nuevoPais('Alemania', mostrarPais);

    setTimeout(() => {
      nuevoPais('Japon', mostrarPais);

      setTimeout(() => {
        nuevoPais('Corea del sur', mostrarPais);
      }, 3000);

    }, 3000);

  }, 3000);
}

iniciarCallbackHell();