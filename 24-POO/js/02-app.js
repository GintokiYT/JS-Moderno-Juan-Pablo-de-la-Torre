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

const katy = new Cliente('Katy', 400);

