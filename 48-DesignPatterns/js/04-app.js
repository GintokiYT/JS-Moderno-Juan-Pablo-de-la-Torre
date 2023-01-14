// Factory

//* Un método de fábrica crea nuevos objetos según las instrucciones del cliente. Una forma de crear objetos en JavaScript es invocando una función constructora con el operador new. Sin embargo, hay situaciones en las que el cliente no sabe, o no debería saber, cuál de varios objetos candidatos crear una instancia. Factory Method permite que el cliente delegue la creación de objetos mientras conserva el control sobre qué tipo instanciar.

class InputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }
  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}"/>`
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch(tipo) {
      case 'text':
        return new InputHTML('text', nombre);
      case 'number':
        return new InputHTML('number', nombre);
      case 'email':
        return new InputHTML('email', nombre);
      default:
      return;
    }
  }
}

const elemento = new HTMLFactory();

const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log(inputText.crearInput());

const inputText2 = elemento.crearElemento('number', 'number-cliente');
console.log(inputText2.crearInput());

const inputText3 = elemento.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());