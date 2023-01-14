// Async Await hacia una API con Fetch

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// function obtenerDatos() {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

async function obtenerDatos() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  }
  catch(e) {
    console.error(e.message);
  }
}


