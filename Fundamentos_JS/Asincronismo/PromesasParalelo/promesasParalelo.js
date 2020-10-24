const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace('id/', '1/')}`;
const opts = {crossDomain: true};// Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.

/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
*/

/*A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible. */
/**
 Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.
 */

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
var ids = [1,2,3,4,5,6,7,8]
var promesas = ids.map(id => obtenerPersonaje(id))
Promise.
    all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
