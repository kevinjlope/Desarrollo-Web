let name = 'Kevin';
let age = '23';
//es5
obj = {name:name, age:age};
//es6
obj2 = {name,age};
console.log(obj2);

//Arrow Functions --> funcion anonima que retorna un valor
const names = [
    {name:'Kevin', age:23 },
    {name:'Yesica',age:27}
]
//Para iterar se puede utilizar el metodo map
let listOfNames = names.map(function(item){
    console.log(item.name);
})

//ES6
let listOfNames2 = names.map(item => console.log(item.name));
//otra forma
const listOfNames3 = (name,age) => {
    ...
}
const listOfNames4 = name => {
    ...
}
const square = num => num * num; 

//PROMESAS --> se utilizan para trabajar el asincronismo
const helloPromise = () => {
    //resuleve o rechaza
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey todo bien!');
        }else{
            reject('Algo salio mal');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('hello'))
    .catch(error => console.log(error));
