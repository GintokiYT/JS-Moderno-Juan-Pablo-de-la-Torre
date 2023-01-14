
const $ = selector => document.querySelector(selector);

// Variables y selectores
const formulario = $('#agregar-gasto');
const gastoListado = $('#gastos ul');

// Eventos
function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto );
  formulario.addEventListener('submit', agregarGasto );
}

// Clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }
  calcularRestante() { 
    const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gastado;
  }
  eliminarGasto(id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.calcularRestante();
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    const {presupuesto, restante} = cantidad;
    $('#total').textContent = presupuesto;
    $('#restante').textContent = restante;
  } 
  imprimirAlerta(mensaje, tipo) {
    // Crear el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center','alert');

    if(tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }

    // Mensaje de error 
    divMensaje.textContent = mensaje;

    // Insertar en el HTML
    $('.primario').insertBefore(divMensaje, formulario);

    // Quitar del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  mostrarGastos(gastos) {
    this.limpiarHTML();
    // Iterar sobre los gastos
    gastos.forEach(gasto => {

      const { cantidad, nombre, id } = gasto;

      // Crear el LI
      const nuevoGasto = document.createElement('li');
      nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'; 
      //nuevoGasto.setAttribute('data-id', id); // Version antigua
      nuevoGasto.dataset.id = id;

      console.log(nuevoGasto);
      // Agregar el HTML del gasto
      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`

      // Boton para borrar el gasto
      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times;';
      btnBorrar.onclick = () => { 
        eliminarGasto(id);
      };

      nuevoGasto.appendChild(btnBorrar);

      // Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    })
  }
  limpiarHTML() {
    while(gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }
  actualizarRestante(restante) {
    $('#restante').textContent = restante;
  }
  comprobarPresupuesto(presupuestoOBJ) {
    const {presupuesto, restante} = presupuestoOBJ;

    const restanteDiv = $('.restante');

    // Comprobar 25%
    if( (presupuesto / 4) > restante ) {
      restanteDiv.classList.remove('alert-success', 'alert-warning');
      restanteDiv.classList.add('alert-danger');
    }
    else if( (presupuesto / 2) > restante ){
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-warning');
    }
    else {
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
      restanteDiv.classList.add('alert-success');
      formulario.querySelector('button[type="submit"]').disabled = false;
    }

    // Si el total es 0 o menor
    if(restante <= 0) {
      ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

const ui = new UI();

let presupuesto;

// Funciones
function preguntarPresupuesto() {
  let presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

  if(presupuestoUsuario === '' || 
     presupuestoUsuario === null || 
     isNaN(presupuestoUsuario || 
     presupuestoUsuario === 0)) {
    // Reinicia la pagina
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto);
}

// Añade gastos
function agregarGasto(e) {
  e.preventDefault();

  // Leer los datos del formulario gasto y cantidad
  const nombre = $('#gasto').value;
  const cantidad = Number($('#cantidad').value);

  // Validar
  if(nombre === '' || cantidad === ''){
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return;
  }
  else if(cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error');
    return;
  }

  // Generar un objeto con el gasto
  const gasto = {
    nombre, 
    cantidad, 
    id: self.crypto.randomUUID(),
  };

  // Añade un nuevo gasto
  //! EXTRA - Validamos que no se exceda del presupuesto
  if(gasto.cantidad > presupuesto.restante){
    ui.imprimirAlerta('El gasto se execede al presupuesto restante', 'error');
    return;
  }
  
  console.log('Si esto se muestra algo salio mal!')

  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta('Gasto agregado Correctamente');

  // Imprimir los gastos
  const { gastos, restante } = presupuesto;

  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  // Reinicia el formulario
  formulario.reset();

}

function eliminarGasto(id) {
  // Elimina del objeto
  presupuesto.eliminarGasto(id);

  // Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
};

eventListeners();

// Video 8