class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es $${this.saldo}`;
  }

  //! Se hace uso desde la clase y no desde la instancia del objeto
  static bienvenida() {
    return `Bienvenido al cajero` 
  }
}

//* Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  static bienvenida() {
    return `Bienvenido al cajero de empresa` 
  }
}

const katy = new Cliente('Katy', 400);

const empresa = new Empresa('Google', 50000, 35478415, 'Social Media');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

