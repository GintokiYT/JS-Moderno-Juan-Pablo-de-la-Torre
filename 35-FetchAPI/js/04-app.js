// Consultar e Imprimir los Resultados de una API

const btnCargarAPI = document.querySelector('#cargarAPI');

btnCargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = 'https://picsum.photos/list';

  fetch(url)
    .then(response => response.json())
    .then(data => mostrarHTML(data));
}

function mostrarHTML(datos) {
  const contenido = document.querySelector('.contenido');
  
  const divContenedor = document.createElement('div');

  datos.forEach( perfil => {
    const {author, post_url} = perfil;
    divContenedor.innerHTML += `
      <p>Autor: ${author}</p>
      <a href="${post_url}" target="_blank">ver imagen</a>
    `
  });

  contenido.appendChild(divContenedor);

}







