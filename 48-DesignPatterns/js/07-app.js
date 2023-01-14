// Namespace

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: 'Pizza',
    precio: 25,
  },
  {
    platillo: 'Hamburguesa',
    precio: 20,
  },
  {
    platillo: 'Hot Dog',
    precio: 20,
  },
];

restaurantApp.funciones = {
  mostrarMenu: () => {
    console.log('Bienvenido a nuestro menu');

    platillos.forEach((platillo, index) => {
      console.log(`${index + 1}. ${platillo.platillo} $${platillo.precio}`);
    })
  },
  ordenar: id => {
    console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando.`);
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };
    restaurantApp.platillos.push(nuevo);
    console.log(`Se agrego el platillo ${platillo}`);
    restaurantApp.funciones.mostrarMenu();
  }
};

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu();

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo('Bistek', '35');


