// Como manejar múltiples awaits

function descargarNuevosClientes() {
  return new Promise( (resolve) => {
    console.log('Descargando clientes...');

    setTimeout(() => {
      console.log('Los clientes fueron descargados')
    }, 5000);
  })
}

function descargarNuevosPedidos() {
  return new Promise( resolve => {
    console.log('Descargando pedidos...');

    setTimeout(() => {
      console.log('Los pedidos fueron descargados');
    }, 3000);
  })
}

const app = async () => {
  try {
    const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])
    console.log(respuesta);
  }
  catch(e) {
    console.log(e.message);
  }
}

app();
