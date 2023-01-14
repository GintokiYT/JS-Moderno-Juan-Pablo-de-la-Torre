const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  fetch('data/datos.txt')
    .then( response => {
      console.log(response);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      console.log(response.type);

      return response.text();
    })
    .then( datos => {
      console.log(datos);
    })
    .catch(err => {
      console.log(err);
    })
}




