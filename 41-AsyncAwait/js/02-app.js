// Nuestro Primer Ejemplo de Async Await y que es lo que hace

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
async function ejecutar() {
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