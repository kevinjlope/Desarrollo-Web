var persona = {
    nombre: 'Kevin',
    apellido : 'Lopez',
    edad : 18,
    peso : 72
}
const VARIANTE_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarPeso = (persona) => {
    persona.peso += VARIANTE_PESO;
}
const adelgazar = persona => persona.peso -= VARIANTE_PESO;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() <0.4;

const META = persona.peso -3;
var dias = 0;
while(persona.peso > META){
    //debugger
    if(comeMucho()){
       //aumenta de peso 
       aumentarPeso(persona)
    }
    if(realizaDeporte()){
        //adelgazar
        adelgazar(persona)
    }
    dias += 1;
    
}
console.log(`Pasaron ${dias} dias, hasta que ${persona.nombre} adelgazo 3kg`);