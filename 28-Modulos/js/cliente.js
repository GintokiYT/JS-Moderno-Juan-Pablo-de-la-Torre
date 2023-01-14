export const nombreCliente = 'Renato';
export const ahorro = 200;

export const mostrarInformacion = (nombre, ahorro) => {
  console.log(`Nombre: ${nombreCliente} - Ahorro: ${ahorro}`);
}

export const tieneSaldo = (saldo) => {
  if(saldo <= 0) {
    console.log('No tiene saldo');
  }
  else {
    console.log('Tiene saldo');
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  } 
  mostrarInformacion(nombre, ahorro){
    console.log(`Nombre: ${this.ahorro} - Ahorro: ${this.ahorro}`);
  }
}

export default function nuevaFuncion() {
  console.log('Este es el export default');
}