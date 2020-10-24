const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace('id/', '1/')}`;
const opts = {crossDomain: true};// Este segundo parámetro es un objeto que le indica al método si el callback es local o remoto.

/*
//callbakcs, es una funcion que se va a ejecutar, cuando se termine el request, esta funcion 
//puede o no llamarse, dependera de la respuesta del request
En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.
Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, 
dentro de la función externa para completar alguna acción.
*/
const onPeopleResponse = function(luke){
    console.log(`Hola yo soy, ${luke.name}`);
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace('id', id)}`;
    $.get(url,opts, onPeopleResponse);

}
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);