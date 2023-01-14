(function() {

  let DB;
  let idCliente;

  const nombre = document.querySelector('#nombre');
  const email = document.querySelector('#email');
  const telefono = document.querySelector('#telefono');
  const empresa = document.querySelector('#empresa');

  const formulario = document.querySelector('#formulario');

  document.addEventListener('DOMContentLoaded', () => {

    // Actualiza el registro
    formulario.addEventListener('submit', actualizarCliente);

    conectarDB();

    // Verificar el ID de la URL
    const parametrosURL = new URLSearchParams(window.location.search);

    idCliente = parametrosURL.get('id');

    if(idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }

  })

  function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);
  
    abrirConexion.onerror = function() {
      console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function() {
      DB = abrirConexion.result;
    }
  }

  function actualizarCliente(e) {
    e.preventDefault();

    if(nombre.value === '' || email.value === '' || telefono.value === '' || empresa.value === '') {
      imprimirAlerta('Todos los datos son obligatorios', 'error');
      return;
    }

    // Actualizar cliente
    const clienteActualizado = {
      nombre: nombre.value,
      email: email.value,
      telefono: telefono.value,
      empresa: empresa.value,
      id: idCliente,
    }

    const transaction = DB.transaction(['crm'], 'readwrite');

    const objectStore = transaction.objectStore('crm');

    objectStore.put(clienteActualizado); 

    transaction.oncomplete = function() {
      imprimirAlerta('Editado correctamente!');

      setTimeout( () => {
        window.location.href = 'index.html';
      }, 100);
    }

    transaction.onerror = function() {
      imprimirAlerta('Hubo un error', 'error');
    }

  }

  function obtenerCliente(id) {
    const transaction = DB.transaction(['crm'], 'readonly');

    const objectStore = transaction.objectStore('crm');

    const cliente = objectStore.openCursor();
    cliente.onsuccess = function(e) {
      const cursor = e.target.result;

      if(cursor) {

        if(cursor.value.id === id){
          llenarFormulario(cursor.value);
        }

        cursor.continue();
      }
    }
  }

  function llenarFormulario(datosCliente) {
    nombre.value = datosCliente.nombre;
    email.value = datosCliente.email;
    telefono.value = datosCliente.telefono;
    empresa.value = datosCliente.empresa;
  }

})();