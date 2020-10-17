var persona = {
    nombre: 'Kevin',
    apellido: 'Lopez',
    edad: 23
}
/*function imprimirNombreMayuscula(n){
    console.log(n.toUpperCase());
}*/
//otra forma
/*
function imprimirNombreMayuscula({nombre}){
    console.log(nombre.toUpperCase());
}*/

//Vaya vaya
function imprimirNombreMayuscula(persona){
    //var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreMayuscula(persona);
//imprimirNombreMayuscula({nombre:'Jefferson'})

function imprimirInfo(persona){
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Su nombre es: ${nombre} y tiene: ${edad} years`);
}

imprimirInfo(persona);

//CLASE 10 --> Parámetros como referencia o como valor
var persona = {
    nombre: 'Kevin',
    apellido: 'Lopez',
    edad: 23
}
function cumpleanos(persona){
    persona.edad += 1;
    //esta funcion modificara la edad del objeto cada vez que se la este llamando
}

function cumpleanosM(persona){
    return{
        ...persona,
        edad: persona.edad +1
    }
}

