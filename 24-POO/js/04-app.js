class Cliente {
  //* Convertir los atributos a privados
  #nombre;
 
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
}

const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());