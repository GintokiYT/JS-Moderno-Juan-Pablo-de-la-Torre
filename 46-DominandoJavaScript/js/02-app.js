// Hoisting

//? Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

//* En la primera etapa se registran todas las funciones
//* En la segunda etapa se ejecutan las funciones

obtenerCliente1('Juan')
function obtenerCliente1(cliente) {
  console.log(`El nombre del cliente es ${cliente}`);
}

const obtenerCliente2 = cliente => {
  console.log(`El nombre del cliente es ${cliente}`);
}
obtenerCliente2('Pablo');