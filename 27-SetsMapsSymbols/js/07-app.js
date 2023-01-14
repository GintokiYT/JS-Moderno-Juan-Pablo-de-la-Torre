//* Generadores

function *crearGenerador() {
  yield 1;
  yield 'Renato';
  yield 3+3;
  yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);
 

function *generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());