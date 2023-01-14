// Constructor Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa){
    super(nombre, email);
    this.empresa = empresa;
  }
}

const cliente = new Cliente('Pablo', 'pablo@gmail.com', 'Google');
console.log(cliente);


