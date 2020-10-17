/*
Cómo funcionan las clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.
*/
class Persona{
    constructor(nombre,apellido,altura){
        this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;    
    }
    saludar(){
        console.log(`Hola me llamo: ${this.nombre} ${this.apellido}`)

    }
    soyAlto(){
        return this.altura > 1.8;   
    }
}
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura);    
    }
    saludar(){
        console.log(`Hola me llamo: ${this.nombre} ${this.apellido} soy desarrollador`)

    }
    soyAlto(){
        return this.altura > 1.8;   
    }
}
var kevin = new Persona('Kevin', 'Lopez',1.9);
kevin.saludar();
var erika = new Persona('Erika','Luna',1.6);
kevin.soyAlto();