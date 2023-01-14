const $ = selector => document.querySelector(selector);

const resultado = $('#resultado');
const critomonedasSelect = $('#criptomonedas');
const monedaSelect = $('#moneda');
const formulario = $('#formulario');

const objCritomoneda = {
  moneda: '',
  criptomoneda: '',
};

const consultarCritomonedas = async () => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  const response = await fetch(url)
  const data = await response.json();

  const criptomonedas = await data.Data;

  selectCriptomonedas(criptomonedas);
};

const selectCriptomonedas = criptomonedas => {
  criptomonedas.forEach( criptomoneda => {
    const {FullName, Name} = criptomoneda.CoinInfo;

    const option = document.createElement('option');
    option.value = Name;
    option.textContent = FullName;

    critomonedasSelect.appendChild(option);
  });
};

const submitFormulario = e => {
  e.preventDefault();

  // Validar
  const { moneda, criptomoneda } = objCritomoneda;

  if(moneda === '') return mostrarAlerta('Selecione una moneda');
  if(criptomoneda === '') return mostrarAlerta('Selecione una criptomoneda');

  // Consultar la API
  consultarAPI();

};

const consultarAPI = async () => {

  limpiarHMTL();

  const { moneda, criptomoneda } = objCritomoneda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    cargarSpinner();

    setTimeout(() => {
      mostrarCotizacionHTML(data.DISPLAY[criptomoneda][moneda]);
    }, 1000);
  } 
  catch(e) {
    console.log(e.message)
  }
 
};

const mostrarCotizacionHTML = cotizacion => {

  limpiarHMTL();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement('p');
  precioAlto.innerHTML = `Precio más alto del día <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement('p');
  precioBajo.innerHTML = `Precio más bajo: <span>${LOWDAY}</span>`;

  const ultimasHoras = document.createElement('p');
  ultimasHoras.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

  const ultimasActualizaciones = document.createElement('p');
  ultimasActualizaciones.innerHTML = `Ultimas actualizaciones: <span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimasActualizaciones);
};

const cargarSpinner = () => {
  const divSpinner = document.createElement('div');
  divSpinner.innerHTML = `
    <h3>Buscando...</h3>  
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;

  divSpinner.style.display = 'flex';
  divSpinner.style.flexDirection = 'column';
  divSpinner.style.alignItems = 'center';
  divSpinner.style.marginTop = '3rem';

  resultado.appendChild(divSpinner);
}

const limpiarHMTL = () => {
  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
};

const mostrarAlerta = mensaje => {

  if($('.error')) return; 

  const divMensaje = document.createElement('div');
  divMensaje.classList.add('error');
  divMensaje.textContent = mensaje;

  formulario.appendChild(divMensaje);

  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  consultarCritomonedas();

  formulario.addEventListener('submit', submitFormulario);
  
  critomonedasSelect.addEventListener('input', e => {
    objCritomoneda.criptomoneda = e.target.value;
  })

  monedaSelect.addEventListener('input', e => {
    objCritomoneda.moneda = e.target.value;
  })

});