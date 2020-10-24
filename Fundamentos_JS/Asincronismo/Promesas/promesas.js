const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace('id/', '1/')}`;
const opts = {crossDomain: true};// Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.

/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
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
obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)

/*var promesa = obtenerPersonaje(1)
promesa.then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
})
promesa.catch(onError)
*/