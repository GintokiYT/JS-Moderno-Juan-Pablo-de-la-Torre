// * Reproductor de musica
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    }
}

// ? Ejemplo de uso de funciones en objetos
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

// ! Agregando una funcion a un objeto
reproductor.borrar = function(id){
    console.log(`Borrando canción con el id: ${id}`);
}

// ? Ejemplo de uso de funciones en objetos
reproductor.borrar(30);

// * Datos del objeto reproductor
console.warn(reproductor);

// ! Agregando la funcion: agregarPlaylist, eliminarPlaylist, reproducirPlaylist
reproductor.agregarPlaylist = function(id){
    console.log(`Agregando playlist con el id: ${id}`);
}
reproductor.eliminarPlaylist = function(id){
    console.log(`Eliminando playlist con el id: ${id}`);
}
reproductor.reproducirPlaylist = function(id){
    console.log(`Reproduciendo playlist con el id: ${id}`);
}

// ? Ejemplo de uso de funciones en objetos
reproductor.agregarPlaylist(30);
reproductor.eliminarPlaylist(20);
reproductor.reproducirPlaylist(10);

// * Datos del objeto reproductor
console.warn(reproductor);



