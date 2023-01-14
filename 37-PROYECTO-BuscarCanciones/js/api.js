// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search

import * as UI from './interfaz.js';
import { ocultarSpinner } from './helpers.js';

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  };
  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.lyrics) {
          const { lyrics } = data;
          UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`
          UI.divResultado.textContent = lyrics;
          ocultarSpinner();
        }
        else {
          UI.divMensajes.textContent = 'La cancion no existe, prueba otra busqueda';
          UI.divMensajes.classList.add('error');
          ocultarSpinner();
          setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
          }, 3000)
        }
      })
  }
}

export default API;




