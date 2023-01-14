// Funciones que Retornan funciones
const obtenerCliente = () => () => console.log('Renato Navarro');

const fn = obtenerCliente();

fn();

