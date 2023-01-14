const nombre = prompt('¿Cómo te llamas?');

// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `<b>${nombre}</b> esta aprendiendo Javascript Moderno`;

setTimeout(() => {
    document.querySelector(".contenido b").classList.add("negrita");
}, 1000);

// Asigna el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';

console.error('Error en el código');