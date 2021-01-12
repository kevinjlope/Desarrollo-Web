const fruits = () => {
    var fruit = 'apple';
    console.log(fruit)
}
fruits()
//console.log(fruit) // -> error no esta definido de manera global. 

const anotherFunction = () => {
    var x = 1; 
    var x = 2; // var se puede redeclarar como, reasignar
    let y = 1;
    y = 2; //en cambio let, no se puede redeclarar, pero si reasignar
    console.log(x);
    console.log(y);
}
anotherFunction();