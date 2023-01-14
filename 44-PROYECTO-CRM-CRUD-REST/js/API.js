const url = 'http://localhost:3000/clientes';

export const nuevoCliente = async cliente => {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    window.location.href = 'index.html';
  } 
  catch(e) {
    console.log(e);
  }
};

// Obtiene todos los clientes
export const obtenerClientes = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } 
  catch(e) {
    console.log(e);
  }
};


// Elimina un cliente
export const eliminarCliente = async id => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  } 
  catch(e) {
    console.log(e.message);
  }
};

// Obtiene un cliente por su ID
export const obtenerCliente = async id => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    return data;
  } 
  catch(e) {
    console.log(e);
  }
};

// Actualiza un registro
export const actualizarCliente = async cliente => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    window.location.href = 'index.html';
  } 
  catch(e) {
    console.log(e.message);
  }
};





