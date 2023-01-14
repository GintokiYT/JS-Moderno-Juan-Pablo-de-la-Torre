// Scope

//? El contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está "en el Scope- alcance actual", entonces no está disponible para su uso. Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.

const cliente = 'Juan';

function mostrarCliente() {
  const cliente = 'Pablo';
  console.log(cliente);
}

mostrarCliente();