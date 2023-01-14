const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

console.log(boolean1 == boolean3);
console.log(boolean1 === boolean3);

// Los constructores crean objetos y no el valor primitivo
const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);