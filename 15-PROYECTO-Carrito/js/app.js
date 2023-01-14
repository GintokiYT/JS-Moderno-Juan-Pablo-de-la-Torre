//* Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //* Cuando agregar un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //* Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //* Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

//* Funciones
function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
    }
}

function eliminarCurso(e){
    if (e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //* Elimina del arreglo el articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        carritoHTML(); //* Iterar sobre el carrito y mostrar su HTML
    }
}

function vaciarCarrito(){
    articulosCarrito = []; //* Reseteamos el arreglo

    limpiarHTML(); //* Limpia el HTML del carrito
}

//* Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    //* Crear un objeto con la información del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };

    //* Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
        //* Actualiza la cantidad del curso
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //* Retorna el objeto actualizado
            }
            else {
                return curso; //* Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    }
    else {
        //* Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoHTML();
}

//* Muestra el carrito de compras en el HTML
function carritoHTML(){
    //* Limpiar el HTML
    limpiarHTML();

    //* Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        //* Agrega el HTML del carrito al tbody
        contenedorCarrito.appendChild(row);
    });
}

//* Elimina los cursos del tbody
function limpiarHTML(){
    //* Forma lenta
    // contenedorCarrito.innerHTML = '';
    //* Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
