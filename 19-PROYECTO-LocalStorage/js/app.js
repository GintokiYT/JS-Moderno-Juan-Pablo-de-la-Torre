const $ = selector => document.querySelector(selector);

// Variables
const formulario = $("#formulario");
const listaTweets = $("#lista-tweets");
let tweets = [];

// Funciones
const agregarTweet = e => {
    e.preventDefault();
    const tweet = $("#tweet").value;
    
    return ( tweet )? insertarTweet(tweet) : mostrarError("Un Tweet no puede ir vacio");
};

//? Inserta tweet en el arreglo de tweets
const insertarTweet = tweet => {
    const tweetObj = {
        id: self.crypto.randomUUID(),
        text: tweet
    }
    // Añadir al arreglo de tweets
    tweets = [ ...tweets, tweetObj ];
    
    // Crear HTML
    crearHTML();
};

//! Mostrar mensaje de error
let mensajeError = "";
const mostrarError = error => {
    if ( mensajeError ) return;
    mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error", "errorTransition");

    // Insertamos el contenido
    const contenido = $("#contenido");
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
        mensajeError = "";
    }, 3000);
};

// Funcion que crea el HTML
const crearHTML = () => {
    limpiarHTML();
    tweets.forEach( tweet => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("tweet");

        const contenidoTweet = document.createElement("p");
        contenidoTweet.textContent = tweet.text;

        const btnEliminar = document.createElement("button");
        btnEliminar.onclick = () => {
            tweetElement.classList.add("tweet-desaparecer");
            setTimeout(() => {
                borrarTweet(tweet.id); 
            }, 3000); 
        };

        tweetElement.appendChild(contenidoTweet);
        tweetElement.appendChild(btnEliminar);

        listaTweets.appendChild(tweetElement);
    });

    // Limpiar y agrega el foco en el formulario
    const tweet = $("#tweet");
    tweet.value = "";
    tweet.focus();

    sincronizarStorage();
};

// Sincronizar con local Storage
const sincronizarStorage = () => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
};

// Limpiar el HTML
const limpiarHTML = () => {
    while( listaTweets.firstChild ){
        listaTweets.removeChild(listaTweets.firstChild);
    }
};

// Cargar tweets del localStorage
const cargarTweets = () => {
    const tweetStorage = localStorage.getItem("tweets");
    
    if( tweetStorage !== null ){
        tweets = JSON.parse(tweetStorage);
        crearHTML()
    }
};

//! Borrar tweets
const borrarTweet = id => {
    tweets = tweets.filter( tweet => tweet.id !== id );
    sincronizarStorage();
    cargarTweets();
}

// Event listeners
const eventListeners = () => {
    // Cuando carga el documento
    document.addEventListener("DOMContentLoaded", cargarTweets);
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener("submit", agregarTweet);
};

eventListeners();