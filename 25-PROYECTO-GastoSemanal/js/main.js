import Presupuesto from './class/Presupuesto.js';
import UI from './class/UI.js';

// Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

const ui = new UI();
let presupuesto;

// Funciones
const preguntarPresupuesto = () => {
  let presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
  presupuestoUsuario = Number(presupuestoUsuario);

  if(presupuestoUsuario === '') window.location.reload();
  if(presupuestoUsuario === null) window.location.reload();
  if(isNaN(presupuestoUsuario)) window.location.reload();
  if(presupuestoUsuario <= 0) window.location.reload();

  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}

const agregarGasto = (e) => {
  e.preventDefault();

  // Leer los datos del formulario nombre y cantidad
  const nombre = document.querySelector('#gasto').value;
  const cantidad = Number(document.querySelector('#cantidad').value);

  // Validar los datos del formulario
  if(nombre === '') {
    ui.imprimirAlerta('Debe ingresar el nombre del gasto','error');
    return;
  }
  if(isNaN(cantidad)) {
    ui.imprimirAlerta('Debe ingresar un valor valido', 'error');
    return;
  }
  if(cantidad <= 0) {
    ui.imprimirAlerta('Debe ingresar una cantidad valida', 'error');
    return;
  }

  // Generar un objeto con el gasto
  const gasto = {
    id: self.crypto.randomUUID(),
    nombre: nombre,
    cantidad: cantidad,
  }

  // Añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta('Gasto agregado correctamente');

  // Imprimir los gastos
  const { gastos, restante } = presupuesto;

  presupuesto.mostrarGastos(gastos);

  ui.actualizarRestante(restante);
  console.log(restante);

  //ui.comprobarPresupuesto(presupuesto);

  // Reinicia el formulario
  formulario.reset();

}

// Eventos
const eventListeners = () => {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  formulario.addEventListener('submit', agregarGasto);
}

eventListeners();