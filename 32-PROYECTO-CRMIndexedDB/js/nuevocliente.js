(function() {

  let DB;

  const formulario = document.querySelector('#formulario');

  const cliente = {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
  }

  document.addEventListener('DOMContentLoaded', () => {

    conectarDB();

    formulario.addEventListener('submit', validarCliente);

  });

  function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);
  
    abrirConexion.onerror = function() {
      console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function() {
      DB = abrirConexion.result;
    }
  }

  function validarCliente(e) {
    e.preventDefault();

    // Leer todos los inputs
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if(nombre === '' || email === '' || telefono === '' || empresa === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
      return;
    }

    // Crear un objeto con la informacion

    cliente.nombre = nombre;
    cliente.email = email;
    cliente.telefono = telefono;
    cliente.empresa = empresa;
    cliente.id =  self.crypto.randomUUID();

    crearNuevoCliente(cliente);
    limpiarObjecto();

    formulario.reset();
    document.querySelector('#nombre').focus(); 

    setTimeout( () => {
      window.location.href = 'index.html';
    }, 1000);

  }

  function limpiarObjecto() {
    cliente.nombre = '';
    cliente.email = '';
    cliente.telefono = '';
    cliente.empresa = '';
    cliente.id =  '';
  }

  function crearNuevoCliente(cliente) {
    console.log(DB);

    const transaction = DB.transaction(['crm'], 'readwrite');

    const objectStore = transaction.objectStore('crm');

    objectStore.add(cliente);

    transaction.onerror = function() {
      console.log('Hubo un error');
    }
    transaction.oncomplete = function() {
      console.log('Cliente agregado');

      imprimirAlerta('El cliente se agrego correctamente!');
    }

  }

})(); 