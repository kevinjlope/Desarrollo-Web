var persona = {
    nombre: 'Kevin',
    apellido : 'Lopez',
    edad : 3,
    ingeniero: true,
    cocinero : false,
    guitarrista : false
}

const MAYOR_EDAD = 18;
const esMayorEdad = ({edad}) => edad >= MAYOR_EDAD;

/*
const esMayorEdad = (persona) =>{
     persona.edad >= MAYOR_EDAD;
}*/
/*
const esMayorEdad = function(persona){
    return persona.edad >= MAYOR_EDAD;
}*/

function mayorEdad(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)

    }
}
function permitirAcceso(persona){
    if(!esMayorEdad(persona)){
        console.log('Acceso denegago')
    }
}
mayorEdad(persona);
permitirAcceso(persona);

/*Repaso arrowFunction
const nameFunction = (argument) =>{
    return condition value
}
Si el argumento de la funcion es solo uno, se puede escribir sin parentesis, quitar las llaves y obviar el return
ya que quedaria implicito
const nameFunction = argument => condition value
}*/

var kevin = {
    nombre : 'kevin',
    apellido: 'lopez',
    carrera: 'mecatronica'
}

const estudiaMecatronica = persona => persona.carrera === 'mecatronica'
const mostrarValor = persona => console.log(`Estudia ${persona.carrera}: ${estudiaMecatronica(persona)}`)
mostrarValor(kevin)