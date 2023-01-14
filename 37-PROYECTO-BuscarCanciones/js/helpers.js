import * as UI from './interfaz.js';

export const mostrarSpinner = () => {
  const divSpinner = document.querySelector('.spinner');
  
  divSpinner.style.display = 'block';
}

export const ocultarSpinner = () => {
  const divSpinner = document.querySelector('.spinner');
  
  divSpinner.style.display = 'none';
}

export const limpiarHTML = () => {
  UI.headingResultado.textContent = '';
  UI.divResultado.textContent = '';
}