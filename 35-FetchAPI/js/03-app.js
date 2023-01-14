// Consultar e Imprimir los Resultados de un Fetch

const btnCargarJSONArray = document.querySelector('#cargarJSONArray');

btnCargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = 'data/empleados.json';

  fetch(url)
    .then(response => response.json())
    .then(data => mostrarHTML(data));
}

function mostrarHTML(empleados){
  const contenido = document.querySelector('.contenido');
  let html = '';
  empleados.forEach(empleado => {
    const {id, nombre, empresa, trabajo} = empleado;
    html += `
      <p>ID: ${id}</p>
      <p>Nombre: ${nombre}</p>
      <p>Trabajo: ${trabajo}</p>
      <p>Empresa: ${empresa}</p>
      <hr/>
    `;
  })
  const divResultado = document.createElement('div');
  divResultado.innerHTML = html;

  contenido.appendChild(divResultado);
}




