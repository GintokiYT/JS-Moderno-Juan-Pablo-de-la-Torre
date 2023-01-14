//* WeakSet
const weakSet = new WeakSet(); // Solo se le puede pasar Objetos

const cliente = {
  nombre: 'Juan',
  saldo: 12.90,
}

weakSet.add(cliente);

console.log(weakSet.has('Renato'));

// Los Weakset no -> Solo guardan objetos, no son iterables, y no tienen la propiedad size

console.log(weakSet);