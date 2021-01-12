const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi'
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
    //Utilizando las variables con var, si pueden ser accedidos en todo el bloque de la funcion, en cambio con let y const, no se podra 
    //ya que solo podran ser accedidos dentro del mismo bloque. 
}
fruits();

let x = 1;
{
    let x =2;
    console.log(x)
}
console.log(x);

var x = 1;
{
    var x =2;
    console.log(x)
}
console.log(x);

const anotherFunction = () => {
    for(let i = 0; i<10; i++){
        setTimeout(() =>{
            console.log(i);
        },1000)
    }
}
anotherFunction();