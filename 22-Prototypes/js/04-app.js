function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    return (this.saldo >= 10000)? 'Gold' : (this.saldo >= 5000)? 'Platinum' : 'Normal';
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retiro) {
    return this.saldo -= retiro;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);   
Persona.prototype.constructor = Cliente;

const Paola = new Persona('Paola', 5000, 10920192);
console.log(Paola);
console.log(Paola.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(Paola.mostrarTelefono());