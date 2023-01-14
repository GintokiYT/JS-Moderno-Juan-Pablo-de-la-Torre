// ? Arrow Function en reproductor de musica
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción... : ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist: ${nombre}`),
    //* Set
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    //* Get
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');

// ! Usando los metodos Get y Set del objeto
reproductor.nuevaCancion = '!Enter Sandman';
reproductor.obtenerCancion;





