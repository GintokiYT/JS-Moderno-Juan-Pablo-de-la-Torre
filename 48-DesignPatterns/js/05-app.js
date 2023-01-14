// Module Pattern

const modulo1 = (function() {
  const nombre = 'Juan';

  function saludar() {
    console.log('Hola');
  }

  return {
    nombre, 
    saludar
  }
})();