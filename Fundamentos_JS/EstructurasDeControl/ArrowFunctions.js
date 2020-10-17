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