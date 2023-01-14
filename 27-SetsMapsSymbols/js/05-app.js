//*Symbols --> Los symbols son diferentes siempre

const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
  console.log('Son iguales')
}
else {
  console.log('Son diferentes')
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llave del objeto persona
persona[nombre] = 'Renato';
persona[apellido] = 'Navarro';
persona.tipoCliente = 'Premium';
persona.saldo = 3000;

console.log(persona);

console.log(persona[nombre]);

//* La propiedades que usan Symbol no son iterables

// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del cliente');

const cliente = {};

cliente[nombreCliente] = 'Maricarmen';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);













