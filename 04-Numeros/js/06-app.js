const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(typeof numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

// Revisar si un numero es entero
console.log(Number.isInteger(numero4));

// Numero mas grande en JS 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
let num1 = 90071992547409911;
console.log(num1);

// El numero mas pequeño en JS -9007199254740991
console.log(Number.MIN_VALUE);
let num2 = -9007199254740991;
console.log(num2);

// Saber si un numero es entero
const esEntero = (num) => {
    if(Number.isInteger(num)){
        return true;
    }
    return false;
}

console.log(esEntero(12.2));
console.log(esEntero(15));

// Saber si un numero es decimal
const esDecimal = (num) => {
    if(typeof num !== "number"){ return false}
    if(Number.isInteger(num)){
        return false;
    }
    return true;
}
console.log(esDecimal("12.2"));
