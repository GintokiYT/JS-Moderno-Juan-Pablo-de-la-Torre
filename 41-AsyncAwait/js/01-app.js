// Pero primero, que es Try Catch

console.log(1+1);

try {
  autenticarUsuario();
}
catch(e) {
  console.log(e.message);
}

console.log(2+2);