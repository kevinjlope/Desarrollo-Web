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
    saludar(fn){
        var { nombre, apellido} = this;
        console.log(`Hola me llamo: ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido) //Se llama a la funcion y se le pasa esos datos como parametros
        }
    }
    soyAlto(){
        return this.altura > 1.8;   
    }
}
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura);    
    }
    saludar(fn){
      /*  var nombre = this.nombre;
        var apellido = this.apellido;*/
        var { nombre, apellido} = this;
        console.log(`Hola me llamo: ${nombre} ${apellido} soy desarrollador`)
        if(fn){
            fn(nombre, apellido,true)
        }
    }
  /*  soyAlto(){
        return this.altura > 1.8;   
    }*/
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`AH mira no sabia que eras desarrollador/a`);
    }
}
var kevin = new Persona('Kevin', 'Lopez',1.9);
var erika = new Persona('Erika','Luna',1.6);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89);
kevin.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);