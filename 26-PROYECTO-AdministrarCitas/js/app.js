const $ = selector => document.querySelector(selector);

const nombreInput = $('#mascota');
const propietarioInput = $('#propietario');
const telefonoInput = $('#telefono');
const fechaInput = $('#fecha');
const horaInput = $('#hora');
const sintomasInput = $('#sintomas');

const formulario = $('#nueva-cita');
const listaCitas = $('#citas')

let estadoEditar = false;

//* Localstorage
const datosStorage = JSON.parse(localStorage.getItem('citas')) || [];

//* CLASE CITA
class Citas {
  constructor() {
    this.citas = datosStorage;
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }
  eliminarCita(id) {
    this.citas = this.citas.filter(cita => cita.id !== id);
  }
  editarCita(citaActualizada) {
    this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
  }
}

//* creamos un nuevo objeto de la clase Citas
const administrarCitas = new Citas(); 

//* Objeto cita
const citaOBJ = {
  id: '',
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
}

//* Agrega los datos capturados en el evento al objeto citaOBJ
const datosCita = (e) => {
  citaOBJ[e.target.name] = e.target.value;
}

//* Imprimi una alerta
const imprimirAlerta = (mensaje, tipo) => {
  const divMensaje = document.createElement('div');
  divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12', 'vanish');

  if(tipo === 'error'){
    divMensaje.classList.add('alert-danger');
  }
  else {
    divMensaje.classList.add('alert-success');
  }

  divMensaje.textContent = mensaje;

  $('#contenido').insertBefore(divMensaje, $('.agregar-cita'));

  setTimeout(() => {
    divMensaje.remove();
  }, 5000);
}

//* Imprimir citas
const imprimirCitas = ({citas}) => {
  limpiarHTML();
  citas.forEach( cita => {
    const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;

    const divCita = document.createElement('div');
    divCita.classList.add('cita', 'p-3');
    divCita.dataset.id = id;

    // Scripting de los elementos de la cita
    const mascotaH2 = document.createElement('h2');
    mascotaH2.classList.add('card-title', 'font-weight-bolder');
    mascotaH2.textContent = mascota;

    const propietarioP = document.createElement('p');
    propietarioP.innerHTML = `
      <span class="font-weight-bolder">Propietario: </span>${propietario}
    `;

    const telefonoP = document.createElement('p');
    telefonoP.innerHTML = `
      <span class="font-weight-bolder">Teléfono: </span>${telefono}
    `;

    const fechaP = document.createElement('p');
    fechaP.innerHTML = `
      <span class="font-weight-bolder">Fecha: </span>${fecha}
    `;

    const horaP = document.createElement('p');
    horaP.innerHTML = `
      <span class="font-weight-bolder">Hora: </span>${hora}
    `;

    const sintomasP = document.createElement('p');
    sintomasP.innerHTML = `
      <span class="font-weight-bolder">Sintomas: </span>${sintomas}
    `;

    // Boton para eliminar las citas
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('boton', 'boton-eliminar', 'mr-2');
    btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    btnEliminar.onclick = () => eliminarCita(id);

    // Añade un boton para editar
    const btnEditar = document.createElement('button');
    btnEditar.classList.add('boton', 'boton-editar');
    btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>`;
    btnEditar.onclick = () => editarCita(cita);

    // Agregar mascotaH2 a divCita
    divCita.appendChild(mascotaH2);
    divCita.appendChild(propietarioP);
    divCita.appendChild(telefonoP);
    divCita.appendChild(fechaP);
    divCita.appendChild(horaP);
    divCita.appendChild(sintomasP);
    divCita.appendChild(btnEliminar);
    divCita.appendChild(btnEditar);

    // Agregar las cita al HTML
    listaCitas.appendChild(divCita);

  });
}

//* Funcion eliminar cita
const eliminarCita = (id) => {
  // Eliminar cita
  administrarCitas.eliminarCita(id);
  localStorage.setItem('citas', JSON.stringify(administrarCitas.citas));

  // Mostrar mensaje
  imprimirAlerta('La cita se eliminó correctamente');

  // Actualizar la lista de citas
  imprimirCitas(administrarCitas);
}

//* Funcion editar cita
const editarCita = (cita) => {
  estadoEditar = true;
  const { id, mascota, propietario, telefono, fecha, hora, sintomas } = cita;
  // LLenar los inputs
  nombreInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Agregamos los valores al objeto citaOBJ
  citaOBJ.id = id;
  citaOBJ.mascota = mascota; 
  citaOBJ.propietario = propietario;
  citaOBJ.telefono = telefono;
  citaOBJ.fecha = fecha;
  citaOBJ.hora = hora;
  citaOBJ.sintomas = sintomas;

  // Cambiar el texto del boton
  formulario.querySelector('button[type="submit"]').textContent = 'GUARDAR CAMBIOS';

}

//* Limpiar HTML
const limpiarHTML = () => {
  while(listaCitas.firstChild) {
    listaCitas.removeChild(listaCitas.firstChild);
  }
}

//* Crea una nueva cita
const nuevaCita = (e) => {
  e.preventDefault();

  // Extraemos del objeto cita
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaOBJ;

  // Validar
  if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
    imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  if(estadoEditar) {
    imprimirAlerta('Cita Actualizada');
    administrarCitas.editarCita({...citaOBJ});
    localStorage.setItem('citas', JSON.stringify(administrarCitas.citas));
    estadoEditar = false;
    formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';

    // Reiniciar formulario
    formulario.reset();
    nombreInput.focus();

    // Reiniciar el objeto
    reiniciarObjetoCita();

    // Mostrar las citas en el HTML
    imprimirCitas(administrarCitas);

    return;
  }

  // Generar un ID 
  citaOBJ.id = self.crypto.randomUUID();

  administrarCitas.agregarCita({...citaOBJ});
  localStorage.setItem('citas', JSON.stringify(administrarCitas.citas));

  // Reiniciar formulario
  formulario.reset();
  nombreInput.focus();

  // Reiniciar el objeto
  reiniciarObjetoCita();

  // Mostrar las citas en el HTML
  imprimirCitas(administrarCitas);

}

//* Reinicia el objeto de cita 
const reiniciarObjetoCita = () => {
  citaOBJ.id = '';
  citaOBJ.mascota = '';
  citaOBJ.propietario = '';
  citaOBJ.telefono = '';
  citaOBJ.fecha = '';
  citaOBJ.hora = '';
  citaOBJ.sintomas = '';
}

//* Funcion que tiene los eventos
const eventListeners = () => {
  nombreInput.addEventListener( 'input', datosCita );
  propietarioInput.addEventListener( 'input', datosCita );
  telefonoInput.addEventListener( 'input', datosCita );
  fechaInput.addEventListener( 'input', datosCita );
  horaInput.addEventListener( 'input', datosCita );
  sintomasInput.addEventListener( 'input', datosCita );

  formulario.addEventListener( 'submit', nuevaCita );

  document.addEventListener( 'DOMContentLoaded', () => imprimirCitas(administrarCitas));
}

//* Llamada a la funcion
eventListeners();