const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld()

var scope = 'I am Global'
const functionScope = () =>{
    var scope = 'I am just a local'
    globalVar = 'Hola'
    const func = () => {
        return scope
    }
    console.log(func())
}
functionScope()
console.log(scope)
console.log(globalVar)