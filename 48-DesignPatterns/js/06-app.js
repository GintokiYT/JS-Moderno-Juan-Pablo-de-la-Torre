/* del 05-app
console.log(modulo1.nombre);

modulo1.saludar();
*/

// Mixin Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInformacion() {
    console.log(`Nombre persona: ${this.nombre} - Email: ${this.email}`);
  },
  mostrarNombre() {
    console.log(`Mi nombre es ${this.nombre}`);
  }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente1 = new Cliente('Pablo', 'pablo@gmail.com');
console.log(cliente1);
cliente1.mostrarInformacion();
cliente1.mostrarNombre();