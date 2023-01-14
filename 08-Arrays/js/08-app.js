const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

// Destructuring con Objetos
const { nombre } = producto;
console.log(nombre);

// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [ , , tercero] = numeros;

console.log(tercero);

console.log('-------------------------------------');
const [one, two , ...three] = numeros;

console.log(one);
console.log(two);
console.log(three);


console.log('-------------------------------------');
const products = {
    name: 'Smartphone',
    price: 500,
    available: true,
    manufacturer: {
        name: 'Apple',
        country: 'USA'
    }
}

const { name: nameProduct , manufacturer: { name: nameManufacture } } = products;

console.log(nameProduct);
console.log(nameManufacture);