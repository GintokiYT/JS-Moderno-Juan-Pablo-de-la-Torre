// ? Detener la ejecución de un if con una funcion
const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 450;

function revisarPuntaje(){
    if (puntaje > 400){
        return console.log('Excelente!!');
    }
    if (puntaje > 300){
        return console.log('Buen puntaje... felicidades');
    }
}

revisarPuntaje();