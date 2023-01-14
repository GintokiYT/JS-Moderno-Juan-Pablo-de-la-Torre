// https://openweathermap.org/

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) {
  e.preventDefault();

  // Validar
  const ciudad = document.querySelector('#ciudad').value;
  const pais = document.querySelector('#pais').value;

  if(ciudad === '' || pais === '') {
    // hubo un error
    mostrarError('Ambos campos son obligatorios');
    return;
  }

  // Consultar la api
  consultarAPI(ciudad, pais);

}

function mostrarError(mensaje) {
  // Validar que no salga multiples alertas
  const alerta = document.querySelector('.clase-alerta');

  if(!alerta) {
    // Crear alerta
    const alerta = document.createElement('div');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'clase-alerta');

    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>
    `;

    container.appendChild(alerta);

    setTimeout( () => {
      alerta.remove();
    }, 5000)
  }
}

function consultarAPI(ciudad, pais) {
  const appID = '932a88e2eb1aac697b6a98b2c4134a07';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

  spinner(); // Muestra Spinner Recarga

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.cod === '404') {
        mostrarError('Ciudad no encontrada');
        return;
      }
      // Imprimir la respuesta en el HTML
      mostrarClima(data);
    });
}

function mostrarClima(datos) {
  limpiarHTML();

  const { name, main: { temp, temp_min, temp_max } } = datos;

  const tempActual = document.createElement('p');
  tempActual.classList.add('font-bold', 'text-6xl');
  tempActual.innerHTML = `${KelvinACentigrados(temp)} &#8451;`;

  const nombreCiudad = document.createElement('p');
  nombreCiudad.classList.add('font-bold', 'text-2xl');
  nombreCiudad.textContent = `Clima en ${name}`;

  const tempMax = document.createElement('p');
  tempMax.classList.add('text-xl');
  tempMax.innerHTML = `Max: ${KelvinACentigrados(temp_max)} &#8451;`;
  
  const tempMin = document.createElement('p');
  tempMin.classList.add('text-xl');
  tempMin.innerHTML = `Min: ${KelvinACentigrados(temp_min)} &#8451;`;

  const resultadoDiv = document.createElement('div');
  resultadoDiv.classList.add('text-center', 'text-white');
  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(tempActual);
  resultadoDiv.appendChild(tempMax);
  resultadoDiv.appendChild(tempMin);

  resultado.appendChild(resultadoDiv);
}

function KelvinACentigrados(temp) {
  return (temp - 273.15).toFixed(1);
}


function limpiarHTML() {
  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHTML();
  const divSpinner = document.createElement('div')
  divSpinner.classList.add('sk-fading-circle');

  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  `;

  resultado.appendChild(divSpinner);
}

