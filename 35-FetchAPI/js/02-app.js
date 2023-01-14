// Consultar un JSON

const cargarJson = document.querySelector('#cargarJSON');

cargarJson.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = 'data/empleado.json';

  fetch(url)
    .then(response => response.json())
    .then(data => mostrarHTML(data));
}

function mostrarHTML(data) {
  const { id, nombre, empresa, trabajo } = data;
  const contenido = document.querySelector('.contenido');

  const divResultado = document.createElement('div');
  divResultado.style.margin = '1rem';

  const idEmpleado = document.createElement('p');
  const nombreEmpleado = document.createElement('p');
  const empresaEmpleado = document.createElement('p');
  const trabajoEmpleado = document.createElement('p');

  idEmpleado.textContent = `ID: ${id}`;
  nombreEmpleado.textContent = `Nombre: ${nombre}`;
  empresaEmpleado.textContent = `Empresa: ${empresa}`;
  trabajoEmpleado.textContent = `Trabajo: ${trabajo}`;  

  divResultado.appendChild(idEmpleado);
  divResultado.appendChild(nombreEmpleado);
  divResultado.appendChild(empresaEmpleado);
  divResultado.appendChild(trabajoEmpleado);

  contenido.appendChild(divResultado);
}





