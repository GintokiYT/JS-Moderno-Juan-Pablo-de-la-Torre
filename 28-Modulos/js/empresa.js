import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro)
    this.categoria = categoria;
  }
  mostrarInformacion() {
    console.log(`Cliente: ${this.nombre} - Saldo: ${this.ahorro} - Categoria: ${this.categoria}`);
  }
}


