var frutas = ["Manzana", "Platano","Cereza","Fresa"]; //forma sintaxica de escribir un array
console.log(frutas);

/*

 array.push() --> Agrega un elemento del array que esta al final
 array.pop() --> Elimina el ultimo elemento del array
 array.unshift("") --> Agrega ese elemento al inicio del array
 array.shift() --> elimina el primer elemento

 */

var estudiantes = ["Kevin","Maria","Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//En javaScript el foreach tiene la siguiente sintaxis
// for(var nn of nns){};

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//While
var estudiantes = ["Kevin","Maria","Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
var i = 0;
while(i < estudiantes.length){
    saludarEstudiantes(estudiantes[i]);
    i++
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiantes);
}
