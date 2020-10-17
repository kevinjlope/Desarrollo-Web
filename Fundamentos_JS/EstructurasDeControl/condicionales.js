var persona = {
    nombre: 'Kevin',
    apellido : 'Lopez',
    edad : 23,
    ingeniero: true,
    cocinero : false,
    guitarrista : false
}

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es:`);
    if(persona.ingeniero){
       console.log('Ingeniero');
    }
    if(persona.cocinero){
        console.log('Cocinero');

    }else{
        console.log('No es cocinero');
    }
}
imprimirProfesion(persona);
function mayorEdad(persona){
    if(persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)

    }
}
mayorEdad(persona);