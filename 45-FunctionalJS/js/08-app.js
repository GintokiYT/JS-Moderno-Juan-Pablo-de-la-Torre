// Closures
const obtenerCliente = () => {
  const nombre = 'Renato';

  function muestraNombre() {
    console.log(nombre);
  }

  return muestraNombre;
}

const cliente = obtenerCliente();
cliente();




