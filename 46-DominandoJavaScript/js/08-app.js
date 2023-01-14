// Qué es self

self.onload = () => {
  console.log('ventana lista!');
}

window.nombre = 'Monitor 20 pulgadas';

const producto = {
  precio: 30,
  disponible: true,
  mostrarInfo() {
    return `El producto: ${self.nombre}`;
  }
}

console.log(producto.mostrarInfo());
