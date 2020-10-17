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
/*
//personas[0].altura
//personas[0]['altura']
for(var i =0; i<personas.length; i++){
    console.log(personas[i]['altura']);
}
// Nota los arrays en javaScript puede ser de cualquier tipo, objeto,script, int, etc
*/

//CLASE 20 --> Filtrar arrays
const esAlta = (persona) =>{
     persona.altura >=1.68 ;
}
//const esAlta = persona => persona.altura >= 1.68;
//const esAlta = ({altura}) => altura >= 1.68;
//filter --> retorna un array con los objetos o elementos que cumplen la condicion.
var personasAltas = personas.filter(esAlta);
/*otra forma
var personasAltas = personas.filter(function(persona){
    return persona.altura >= 1.68;
})
*/
console.log(personasAltas);
//Reto --> filtrado de personas bajas
const esBaja = ({altura}) => altura < 1.68;
//const esBaja = persona => persona.altura < 1.68;
var personasBajas = personas.filter(esBaja);