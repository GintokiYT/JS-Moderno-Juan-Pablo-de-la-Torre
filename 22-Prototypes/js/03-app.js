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

// Instanciarlo
const Paola = new Cliente('Paola', 6000);
console.log(Paola)
console.log(Paola.tipoCliente());
console.log(Paola.nombreClienteSaldo());
