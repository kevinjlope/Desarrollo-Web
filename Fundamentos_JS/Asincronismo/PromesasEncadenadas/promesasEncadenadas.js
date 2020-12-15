const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace('id/', '1/')}`;
const opts = {crossDomain: true};// Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.

/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
*/

/*A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible. */

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {
        //resolve y reject --> son funciones que se deben llamar
        const url = `${API_URL}${PEOPLE_URL.replace('id', id)}`;
    
    $.get(url,opts, function(data){
        resolve(data)
    })
    .fail(()=>reject(id))
    });
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}
/*
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .catch(onError)
*/
var contador = 1;
while(contador < 20){
    //var otraV = contador;
    let cont2 = contador
    obtenerPersonaje(cont2)
    .then(personaje => {
        console.log(`El personaje ${cont2} es ${personaje.name}`)
        //return obtenerPersonaje(2)
    })
    .catch(onError)
    contador++    
}