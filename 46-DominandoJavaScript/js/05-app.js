// Explicit Binding

function persona(ele1, ele2) {
  console.log(`Mi nombre es ${this.nombre} y escucho ${ele1} y ${ele2}`)
}
 
const informacion = {
  nombre: 'Juan',
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

/* 
  call() permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.

  call() provee un nuevo valor de this a la función/método. Con call(), puedes escribir un método una vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto.
*/
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

/*
  apply es muy similar a call(), excepto por el tipo de argumentos que soporta. Puede utilizarse un arreglo de parámetros en lugar de un conjunto de pares nombre-valor. Con apply, puede utilizarse un arreglo literal, por ejemplo, fun.apply(this, ['eat', 'bananas']), o un objeto Array, por ejemplo, fun.apply(this, new Array('eat', 'bananas')).
*/
persona.apply(informacion, musicaFavorita);

/*
  La función bind() crea una nueva función (función ligada) con el mismo cuerpo (propiedad interna call en términos de ECMAScript 5) como la función que será llamada (la función objetivo de la función ligada) con la referencia this asociada al primer argumento de bind(), el cual no podrá ser sobreescrito. bind() también acepta parámetros predeterminados que antecederán al resto de los parámetros específicos cuando la función objetivo sea llamada. Una función ligada también puede ser construída utilizando el operador new: al hacerlo, actuará como si en su lugar hubiera sido construída la función objetivo.

  En este último caso, el parámetro correspondiente para this será ignorado, aunque los parámetros predeterminados que antecederán al resto sí serán provistos para la función emulada. 
*/
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();