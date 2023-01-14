//? for ...in
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
};

//* Itera sobre el indice
for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

//* Iterar sobre los valores y las llaves
for (let [llave, valor] of Object.entries(automovil)) {
    console.log(`name: ${llave} - value: ${valor}`);
}