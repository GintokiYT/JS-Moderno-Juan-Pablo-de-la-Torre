// ? El operador && para revisar que se cumplan 2 o más condiciones
const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
}
else if ( !usuario && !puedePagar) {
    console.log('No puedes comprar');
}
else if (!usuario) {
    console.log('Inicia sesión o abre una cuenta');
}
else if (!puedePagar) {
    console.log('Fondos insuficientes');
}


