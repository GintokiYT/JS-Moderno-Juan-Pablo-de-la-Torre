// ** Funciones que retorna valores
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 5);
console.log(resultado);

// ? Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`Total a pagar ${totalPagar}`);
console.log(total);