let autenticado = true;

if(autenticado){
    console.log('Si puedes ver Netflix');
}
else{
    console.log('No puedes ver Netflix');
}

// Operador ternario
autenticado = false;
console.log(autenticado? 'Si puedes ver Netflix': 'No puedes ver Netflix');