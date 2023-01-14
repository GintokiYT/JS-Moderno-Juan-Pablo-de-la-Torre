// Constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function(marca) {
  const base = 2000;
  let resultado;
  const cotizacion = {
    Americano : base * 1.15,
    Asiatico: base * 1.05,
    Europeo: base * 1.35,
  }

  // Leer el año
  const diferencia = new Date().getFullYear() - this.year;

  resultado = cotizacion[marca];

  // Cada año que la diferencia es mayor el costo se va reducir en un 3%
  resultado -= resultado * ((diferencia * 3) / 100);

  // Si el seguro es basico aumenta en un 30% y si es completo aumenta en 50%
  resultado = (this.tipo === 'basico')? resultado * 1.3 : resultado * 0.5;

  return resultado;
}

function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector('#year');
  for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('div');
  div.classList.add('mensaje', 'mt-10');
  div.textContent = mensaje;

  (tipo === 'error')? div.classList.add('error') : div.classList.add('correcto');

  // Insertar en el HTML
  const formulario = document.querySelector('#cotizar-seguro');
  formulario.insertBefore(div, document.querySelector('#resultado'));

  setTimeout(() => {
    div.remove();      
  }, 3000);
}

UI.prototype.mostrarResultado = (seguro, total) => {
  // Destructuracion del seguro
  const {marca, year, tipo} = seguro;

  // Crear el resultado
  const div = document.createElement('div');
  div.classList.add('mt-10');
  div.innerHTML = `
    <p class="header">Tu resumen</p>
    <p class="font-bold">Marca: <span class="font-normal">${marca}</span></p>
    <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal">${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
  `
  const resultadoDiv = document.querySelector('#resultado');
  
  // Mostrar spinner
  const spinner = document.querySelector('#cargando');
  spinner.style.display = 'block';
  
  setTimeout(() => {
    spinner.style.display = 'none'; // Se oculta el spinner
    resultadoDiv.appendChild(div);  // Se muestra el resultado
  }, 3000);
}

// Instanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); 
})

eventListeners();
function eventListeners() {
  const formulario = document.querySelector('#cotizar-seguro');
  formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  const $ = selector => document.querySelector(selector);
  // Leer la marca seleccionada
  const marca = $('#marca').value;

  // Leer el año seleccionado
  const year = $('#year').value;

  // Leer el tipo de cobertura
  const tipo = $('input[name="tipo"]:checked').value;

  if(marca === '' || year === '' || tipo === '') {
    ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
    return;
  }

  ui.mostrarMensaje('Cotizando', 'exito');

  // Ocultar las cotizaciones previas
  const resultado = $('#resultado div');
  if(resultado !== null){
    resultado.remove();
  }

  // Instanciar el seguro
  const seguro = new Seguro(marca, year, tipo);
  const total = seguro.cotizarSeguro(marca)

  // Instanciar el prototype que va a cotizar
  ui.mostrarResultado(seguro, total);
}