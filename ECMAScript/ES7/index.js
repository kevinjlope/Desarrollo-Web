let numbers = [1,2,3,4,5,6,8];

if(numbers.includes(7)){
    console.log('Se encuentra el valor 7');
}
else{
    console.log('No se encuentra');
}
/*
    array.includes(element, index);
    index --> Hace referencia a la posicion del array en la cual
    se empezara a buscar
    element --> representa el valor que se va a buscar
*/
//exponentes
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);
