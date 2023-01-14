// Variables
const $ = selector => document.querySelector(selector);

const marca = $("#marca");
const year = $("#year");
const minimo = $("#minimo");
const maximo = $("#maximo");
const puertas = $("#puertas");
const transmision = $("#transmision");
const color = $("#color");

// contenedor para el resultado
const resultado = document.querySelector("#resultado");

const maxAnio = new Date().getFullYear();
const minAnio = maxAnio - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: ""
};

// Funciones
const mostrarAutos = autos => {
    limpiarHTML();
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        // Insertar en el html -- appendChild() === permite agregar un nodo al final de la lista de nodos secundarios de un nodo principal especificado.
        resultado.appendChild(autoHTML);
    });
};

// Funcion Limpiar HTML
const limpiarHTML = () => {
    resultado.textContent = "";
}

const llenarSelect = () => {
    for(let i = maxAnio; i > minAnio; i-- ){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

// Funcion que filtra en base a la busqueda
//* Filtra por marca
const filtrarMarca = auto => {
    const { marca } = datosBusqueda;
    return ( marca )? auto.marca === marca : auto; 
}
//* Filtra por año
const filtrarYear = auto => {
    const { year } = datosBusqueda;
    return ( year )? auto.year === year : auto; 
}
//* Filtrar por el minimo
const filtrarMinimo = auto => {
    const { minimo } = datosBusqueda;
    return ( minimo )? auto.precio >= minimo : auto;
}
//* Filtrar por el maximo
const filtrarMaximo = auto => {
    const { maximo } = datosBusqueda;
    return ( maximo )? auto.precio <= maximo : autos;
}
//* Filtrar por puertas
const filtrarPuertas = auto => {
    const { puertas } = datosBusqueda;
    return ( puertas )? auto.puertas === puertas : auto;
}
//* Filtrar por transmision
const filtrarTransmision = auto => {
    const { transmision } = datosBusqueda;
    return ( transmision )? auto.transmision === transmision : auto;
}
//* Filtrar por color
const filtrarColor = auto => {
    const { color } = datosBusqueda;
    return ( color )? auto.color === color : auto;
}
//! Filtra los autos (marca, año)
const filtrarAuto = () => {
    const resultado = autos.filter(filtrarMarca)
                           .filter(filtrarYear)
                           .filter(filtrarMinimo)
                           .filter(filtrarMaximo)
                           .filter(filtrarPuertas)
                           .filter(filtrarTransmision)
                           .filter(filtrarColor);

    return ( resultado.length )? mostrarAutos(resultado) : noResultado();
}

//? No hay resultado
const noResultado = () => {
    limpiarHTML();

    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados, Intenta con otros terminos de busqueda.";

    resultado.appendChild(noResultado);
}

// Event listeners para los select de busqueda
marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", e => {
    datosBusqueda.year = parseInt( e.target.value );
    filtrarAuto();
});
minimo.addEventListener("change", e => {
    datosBusqueda.minimo = parseInt( e.target.value );
    filtrarAuto();
});
maximo.addEventListener("change", e => {
    datosBusqueda.maximo = parseInt( e.target.value );
    filtrarAuto();
});
puertas.addEventListener("change", e => {
    datosBusqueda.puertas = parseInt( e.target.value );
    filtrarAuto();
});
transmision.addEventListener("change", e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

// Realiza acciones cuando el DOM ha terminado de cargar y se encuentra listo
document.addEventListener("DOMContentLoaded", () => {
    // Muestra los autos 
    mostrarAutos(autos);
    // Llena la opcion de año
    llenarSelect(); 
});