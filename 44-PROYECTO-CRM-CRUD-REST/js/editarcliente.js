import { mostrarAlerta } from './funciones.js';
import { obtenerCliente, actualizarCliente } from './API.js';
 
(function() {

  // Campos del formulario
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const empresaInput = document.querySelector('#empresa');
  const telefonoInput = document.querySelector('#telefono');
  const idInput = document.querySelector('#id');

  document.addEventListener('DOMContentLoaded', async () => {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get('id'));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    // Submit al formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

  }); 

  function mostrarCliente(cliente) {
    const { id, nombre, email, empresa, telefono } = cliente;

    nombreInput.value = nombre;
    emailInput.value = email;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value),
    };

    if(validar(cliente)) {
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }

    // Rescribe el objeto
    actualizarCliente(cliente);
  }

  function validar(obj) {
    return !Object.values(obj).every( input => input !== '');
  }

})();