localStorage.setItem("nombre", "Renato");

const productos = [
    { nombre: "teclado", precio: 53.50 },
    { nombre: "monitor", precio: 83.50 },
    { nombre: "mouse", precio: 15.50 },
];

localStorage.setItem("productos", JSON.stringify(productos));

const meses = ["Enero", "febrero", "marzo"];

localStorage.setItem("meses", JSON.stringify(meses));
