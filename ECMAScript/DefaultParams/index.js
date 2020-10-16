function newF(name, age, country){
    var name = name || 'Kevin';
    var age = age || 23;
    var country = country || 'EC';
    console.log(name,age,country);
}

//es6
function newFS(name='Kevin', age='23',country='EC'){
    console.log(name,age,country);
};
newFS();
newFS('Hector','20','EC');

//Concatenacion
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);

epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Unir arreglos en un solo arreglo --> operador de propragacion
let team1 = ['Kevin', 'Julian','Ricardo'];
let team2 = ['Daniela', 'Rocio','Wendy'];

let unionT = ['David', ...team1, ...team2];
console.log(unionT);

{
    var globalVar = 'Global Var'; 
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
    //Nota solo existe en el bloque de codigo que fue definido

}
console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a';
console.log(a);