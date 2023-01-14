//? El ejercicio Fizz Buzz

//* 3 6 9 12 ... fizz
//* 5 10 15 20 ... buzz
//* 15 30 45 fizzbuzz

function fizzBuzz(num) {
    for ( let i = 1; i <= num; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FizzBuzz`);
            continue
        }   
        if ( i % 3 === 0) {
            console.log(`${i} Fizz`);
            continue;
        }
        if ( i % 5 === 0) {
            console.log(`${i} Buzz`);
            continue;
        }   
    } 
}

fizzBuzz(30);
