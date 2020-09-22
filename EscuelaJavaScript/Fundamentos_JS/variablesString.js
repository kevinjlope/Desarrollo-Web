var nombre = 'Kevin', apellido = 'Lopez';
//toUpperCase() --> no recibe parametros, y convierte a todo el string en mayuscula
var nombreEnMayuscula = nombre.toUpperCase();
//toLowerCase() --> no recibe parametros, y conviernte a todo el string en minuscula
var apellidoEnMinuscula = apellido.toLowerCase();
//charAt("posicion") --> recibe un parametro que representa la posicion en el string
var primeraLetraNombre = nombre.charAt(0);

var cantidadLetrasNombre = nombre.length;

var nombreCompleto = nombre+' '+apellido;
//Interpolacion de texto --> lo interesante de esto que se puede implementar codigo
//javaScript
var nombreCompleto2 = `${nombre} ${apellido,toUpperCase()}`;
//substr() --> obtiene una seccion de string, respecto al intervalo pasado como 
//parametro en la funcion substr()'
var str = nombre.substr(1,2);