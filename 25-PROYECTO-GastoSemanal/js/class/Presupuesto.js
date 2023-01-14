class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
    this.gastos = [];
  }
  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
  }
  calcularRestante() { 
    const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gastado;
  }
  eliminarGasto(id) {
    // Elimina del objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.calcularRestante();
  }
  mostrarGastos(gastos) {
    this.limpiarHTML();
    gastos.forEach(gasto => {
      const {nombre, cantidad, id} = gasto;

      // Creamos el LI
      const nuevoGasto = document.createElement('li');
      nuevoGasto.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      nuevoGasto.dataset.id = id;

      nuevoGasto.textContent = nombre;

      const contenidoGasto = document.createElement('span');
      contenidoGasto.classList.add('badge', 'badge-primary', 'badge-pill');
      contenidoGasto.textContent = '$ ' + cantidad;

      nuevoGasto.appendChild(contenidoGasto);

      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.textContent = 'x';
      btnBorrar.onclick = () => { 
        this.eliminarGasto(id);
        this.mostrarGastos(gastos);
      };

      nuevoGasto.appendChild(btnBorrar);

      // Agregar en el HTML
      document.querySelector('#gastos ul').appendChild(nuevoGasto);

    })
  }
  limpiarHTML() {
    const listadoGastos = document.querySelector('#gastos ul');
    while(listadoGastos.firstChild){
      listadoGastos.removeChild(listadoGastos.firstChild);
    }
  }
}


export default Presupuesto;