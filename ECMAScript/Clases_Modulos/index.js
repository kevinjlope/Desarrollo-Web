class calculator{
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }
    sum(valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
//Modulos
import hello from './module';
hello();

//Generadores 
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);