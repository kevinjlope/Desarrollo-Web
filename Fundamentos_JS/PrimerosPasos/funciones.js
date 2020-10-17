var nombre = 'Kevin', edad = 28;

function mostrarEdad(nombre, edad){
    console.log(`${nombre} tiene ${edad} years`);
}

mostrarEdad(nombre, edad);
mostrarEdad('Jefferson', 24);
mostrarEdad();

//no confundir las variables globales con las locales.
//Ojo el objeto windows, nos permite acceder a cualquier
//variable global
/*
Variable global: Variable que no esta definida dentro de una funcion sino por fuera de ella.
Al hacer referencia directa a una variable global dentro de una funcion, podermos modificar su valor, esto se le denomina sideEfect, y esto lo vamos a querer evitar.
Para acceder a la variable global, hacemos referencia al objeto global, en este caso por estar en el browser accedemos con window.nombre
 */ 

 //ALcanse de las funciones
 function imprimirNombreEnMayuscula(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
 }

 imprimirNombreEnMayuscula();