class UI {
  insertarPresupuesto(cantidad) {
    const { presupuesto, restante } = cantidad;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }
  imprimirAlerta(mensaje='', tipo=''){
    // Creamos el div contenedor
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');

    if(tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } 
    else {
      divMensaje.classList.add('alert-success');
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el HTML
    document.querySelector('.primario').insertBefore(divMensaje, document.querySelector('#agregar-gasto'));

    // Quitar del HTML 
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante;
  }
  limpiarHTML() {
    const listadoGastos = document.querySelector('#gastos ul');
    while(listadoGastos.firstChild){
      listadoGastos.removeChild(listadoGastos.firstChild);
    }
  }
}

export default UI;