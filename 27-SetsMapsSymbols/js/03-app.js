// Que son los Maps
const cliente = new Map(); // --> LLave valor
 
cliente.set('nombre', 'Renato');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre')); //* Va la Llave (nombre, tipo, saldo);

console.log(cliente.get('nombre')); //* Trae el dato de la llave

cliente.set('saldo', 5000);

console.log(cliente);


const paciente = new Map([['nombre', 'Paola'], ['habitacion', 'no definida']]);

paciente.set('dr', 'Josue');
paciente.set('nombre', 'Maribel');

console.log(paciente);

console.log(paciente.size);


paciente.forEach( (value, key) => {
  console.log(key + ': ' + value);
}); 