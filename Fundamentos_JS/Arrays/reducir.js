/*El método reduce() nos permite reducir, mediante una función que se aplica a 
cada uno de los elemento del array, todos los elementos de dicho array, a un valor único. */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)
/*
//console.log(personasCms)
var acum = 0;
for( var i =0; i< personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros;
}*/
const reducer = (acum,persona) => acum + persona.cantidadDeLibros; 

//0 --> es el valor inicial del acumulador;
var totalLibros = personas.reduce(reducer,0);
console.log(`En total todos tienen ${totalLibros}`);