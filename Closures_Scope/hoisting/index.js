//hoisting --> eleva las declaraciones
a = 2;
var a;
console.log(a);
//y no en las inicializaciones
console.log(a);
var a = 2;

function nameOfDog(name){
    console.log(name)
}
nameOfDog('ROky')