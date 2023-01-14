// Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");

//? Variables de campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListener();
function eventListener() {
    // Cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp);

    // Campos del formulario
    email.addEventListener("keyup", validarFormulario);
    asunto.addEventListener("keyup", validarFormulario);
    mensaje.addEventListener("keyup", validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener("click", resetearFormulario);

    // Enviar email
    formulario.addEventListener("submit", enviarEmail);
}

// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed");
    btnEnviar.classList.add("opacity-50");
}

function validarFormulario(e){

    if(e.target.value.length > 0){
        // Elimina los errores
        const error = document.querySelector("p.error");
        if(error){
            error.remove();
        }

        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
    }
    else{
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        mostrarError("Todos los campos son obligatorio");
    }   

    if(e.target.type === "email"){
        if(er.test(e.target.value)){
            // Elimina los errores
            const error = document.querySelector("p.error");
            if(error){
                error.remove();
            }
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        }
        else{
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError("Email no valido");
        }
    }

    if(er.test(email.value) && asunto.value !== "" && mensaje.value !== ""){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed");
        btnEnviar.classList.remove("opacity-50");
    }
    else{
        btnEnviar.disabled = true;
        btnEnviar.classList.add("cursor-not-allowed");
        btnEnviar.classList.add("opacity-50");
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error");

    const errores = document.querySelectorAll(".error");

    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e){
    e.preventDefault();

    // Mostrar el Spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    // Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = "none";

        // Mensaje que dice que se envio correctamente
        const parrafo = document.createElement("p");
        parrafo.textContent = "El mensaje se envió correctamente";
        parrafo.classList.add("text-center", "my-10", "p-2", "bg-green-500", "text-white", "font-bold", "uppercase");

        // Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout( () => {
            parrafo.remove(); // Eliminar el mensaje de éxito
            resetearFormulario();
        }, 3000);
    }, 3000);
}

// Funcion que resetea el formulario
function resetearFormulario(){
    formulario.reset();

    iniciarApp();
}