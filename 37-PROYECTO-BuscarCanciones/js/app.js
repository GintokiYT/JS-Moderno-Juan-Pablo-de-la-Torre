import * as UI from './interfaz.js';
import API from './api.js';

import { mostrarSpinner, limpiarHTML } from './helpers.js';

const buscarCancion = e => {
  e.preventDefault();

  // Limpiar el HTML
  limpiarHTML();

  // Obtener datos del formulario
  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#cancion').value;

  if(artista === '' || cancion === '') {
    // EL usuario dejo almenos un campo vacio, mostrar error
    UI.divMensajes.textContent = 'Error, todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');

    setTimeout(() => {
      UI.divMensajes.textContent = '';
      UI.divMensajes.classList.remove('error');
    }, 3000);

    return
  }

  const busqueda = new API(artista, cancion);
  mostrarSpinner();
  busqueda.consultarAPI();

}

UI.formularioBuscar.addEventListener('submit', buscarCancion);