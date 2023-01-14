// IndexDB
let DB;

const crmDB = () => {
  // Crear base de datos V.10
  let crmDB = window.indexedDB.open('crm', 1);

  // Si hay un error
  crmDB.onerror = () => {
    console.log('Hubo un error al crear la base de datos');
  }

  // Si se creo bien
  crmDB.onsuccess = () => {
    console.log('Base de datos creada!');

    DB = crmDB.result;
  }

  // Configuracion de la base de datos
  crmDB.onupgradeneeded = (e) => {
    const db = e.target.result;

    const objectStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      autoIncrement: true,
    });

    // Definir las columnas
    objectStore.createIndex('nombre', 'nombre', {unique: false});
    objectStore.createIndex('email', 'email', {unique: true});
    objectStore.createIndex('telefono', 'telefono', {unique: false});

    console.log('Columnas creadas');
  }
}

const crearCliente = () => {
  let transaction = DB.transaction(['crm'], 'readwrite');

  transaction.oncomplete = () => {
    console.log('Transaccion completada');
  }

  transaction.onerror = () => {
    console.log('Hubo un error en la transaccion');
  }

  const objectStore = transaction.objectStore('crm');

  const nuevoCliente = {
    nombre: 'Renato',
    email: 'renato@gmail.com',
    telefono: '934369928',
  }

  const peticion = objectStore.add(nuevoCliente);

  console.log(peticion);

}

document.addEventListener('DOMContentLoaded', () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
})






