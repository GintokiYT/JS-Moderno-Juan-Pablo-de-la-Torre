const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// cuanto mide el arreglo
console.table(meses.length);

console.warn("FOR")
for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}

console.warn("FOR OF")
for (const mes of meses) {
    console.log(mes);
}

console.warn("FOREACH")
meses.forEach( elements => {
    console.log(elements);
});




