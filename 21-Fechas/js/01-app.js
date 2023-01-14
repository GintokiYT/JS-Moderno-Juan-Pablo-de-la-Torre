const diaHoy = new Date();

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth() + 1;
valor = diaHoy.getMinutes();
valor = diaHoy.getSeconds();
valor = diaHoy.getTime();

console.log(valor);