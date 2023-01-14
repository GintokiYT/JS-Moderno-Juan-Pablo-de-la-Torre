import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);

mostrarInformacion(nombreCliente, ahorro);

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);
cliente.mostrarInformacion(); 

const empresa = new Empresa('Renato', 5000, 'Desarrollo Web');

console.log(empresa);
empresa.mostrarInformacion();

nuevaFuncion();