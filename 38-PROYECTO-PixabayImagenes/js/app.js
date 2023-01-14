const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

const validarFormulario = e => {
  e.preventDefault();

  const terminoBusqueda = document.querySelector('#termino').value;

  if(terminoBusqueda === '') {
    mostrarAlerta('Agrega un termino de busqueda');
    return;
  }

  buscarImagenes();
}

const mostrarAlerta = mensaje => {
  const alerta = document.createElement('p');

  if(document.querySelector('.alerta')){
    return;
  }

  alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');
  alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
  `;
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

const buscarImagenes = () => {

  const termino = document.querySelector('#termino').value;

  const key = '29204254-2026f3e239c6ca89f079598f6';
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      totalPaginas = calcularPaginas(data.totalHits);
      mostrarImagenes(data.hits);
    });
}

const mostrarImagenes = datos => {

  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

  // Iterar sobre el arreglo de imagenes y construir el HTML
  datos.forEach( data => {
    const { webformatURL, likes, views, largeImageURL } = data;
    
    resultado.innerHTML += `
      <div class="bg-white contenedor-imagen">
        <img class="w-full" src="${webformatURL}" />
        <div class="description-imagen">
          <span class="font-bold"><span class="font-light">Me gusta </span>${likes}</span>
          <span class="font-bold"><span class="font-light">Vistas </span>${views}</span>
        </div>
        <a class="btn-imagen" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagén</a>
       </div>
      </div>  
    `;
  })

  // Limpiar el paginador previo
  while(paginacionDiv.firstChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild);
  }

  imprimirPaginador();
}

const calcularPaginas = total => {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas 
function *crearPaginador(total) {
  for(let i = 1; i <= total; i++) {
    yield i;
  }
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);

  while(true) {
    const { value, done } = iterador.next();
    if(done) return;
    // Caso contrario, genera un botón por cada elemento en el generador
    const boton = document.createElement('a');
    boton.href = '#';
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'rounded')

    boton.onclick = () => {
      paginaActual = value;
      buscarImagenes();
    }

    paginacionDiv.appendChild(boton); 
  }
}


// const limpiarHTML = () => {
//   while(resultado.firstChild) {
//     resultado.removeChild(resultado.firstChild);
//   }
// }

window.onload = () => {
  formulario.addEventListener('submit', validarFormulario);
}

