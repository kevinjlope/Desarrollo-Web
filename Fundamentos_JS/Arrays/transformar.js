//clase 21
var kevin = {
    nombre : 'Kevin',
    apellido : 'Lopez',
    altura: 1.70
}
var pedro = {
    nombre : 'Pedro',
    apellido : 'Mero',
    altura: 1.68
}
var rocio = {
    nombre : 'Rocio',
    apellido : 'Mera',
    altura: 1.58
}
var darly = {
    nombre : 'Darly',
    apellido : 'Guerrero',
    altura: 1.62
}
var daniela = {
    nombre : 'Daniela',
    apellido : 'Garcia',
    altura: 1.64
}
var personas = [kevin,pedro,rocio,darly,daniela];
//Para evitar escribir el return en la arrow functions, se puede agregar los corchetes
//dentro de parentesis
const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura*100
})

/*
const pasarAlturaACms = persona => {
    //persona.altura = persona*altura*100;
    return {
        ...persona,
        altura: persona.altura*100
    };
}*/
/*map -->  retorna un nuevo array
En esta clase veremos cómo transformar un array. 
El método map() itera sobre los elementos de un array en el orden de inserción y 
devuelve array nuevo con los elementos modificados.
*/
var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms);
console.log(personas);