//Object.entries -->  Trnasforma los valores de un objeto a una matriz
const data = {
    frontend: 'Kevin',
    backend: 'Ana',
    design: 'Rosy'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values --> devuelve los valores de un objeto y los agg a un array
const data1 = {
    frontend: 'Kevin',
    backend: 'Ana',
    design: 'Rosy'
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

//pad --> Permite anadir cadenas vacias a string
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '----'));

const obj = { 
    name: 'kevin',
    // Trailing-comas
    //La coma hace referencia que puede o no a ver otro valor.
}