// Singleton

//* El patrón de diseño Singleton (instancia única) está diseñado para restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto. Su intención consiste en garantizar que una clase sólo tenga una instancia y proporcionar un punto de acceso global a ella.

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if(!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    }
    else {
      return instancia;
    }
  }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const persona1 = new Persona('Pablo', 'correo@correo.com');
console.log(persona1);