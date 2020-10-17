var persona = {
    nombre: 'Kevin',
    apellido : 'Lopez',
    edad : 18,
    peso : 72
}
const VARIANTE_PESO = 0.2;

const aumentarPeso = (persona) => {
    persona.peso += VARIANTE_PESO;
}
const adelgaar = persona => persona.peso -= VARIANTE_PESO;

console.log(`${persona.nombre} al inicio del year pesa: ${persona.peso}`)
for(var i =1; i<=365; i++){
    var random = Math.random();
    if(random <0.25){
        aumentarPeso(persona)
    }else if(random < 0.5){
        adelgaar(persona);
    }
    
    else{

    }
}
console.log(`${persona.nombre} al final del year pesa: ${persona.peso.toFixed(2)}`)
