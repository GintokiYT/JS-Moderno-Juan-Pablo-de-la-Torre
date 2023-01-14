// Async Await en function express y Declaration

function descargarClientes() {
  return new Promise( (resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if(!error) {
        resolve('El listado de clientes se descargo correctamente');
      } else {
        reject('Error en la conexion');
      }
    }, 3000);
  })
} 

// Async Await
const ejecutar = async () => {
  try {
    const respuesta = await descargarClientes();
    console.log(respuesta);
    console.log( 2 + 2 );
  }
  catch(e) {
    console.log(e.message);
  }
}

ejecutar();
