const kevin = {
    nombre: 'kevin',
    apellido: 'lopez'
}

const yesika = {
    nombre: 'yesika',
    apellido: 'cortez'
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//Metodo bind

//const saludarKevin = saludar.bind(kevin)
//const saludarYesika = saludar.bind(yesika)
/*
setTimeout(saludar.bind(kevin),1000)
//Bind puede recibir varios parametros, pero el primero que recibe siempre sera el contexto
//Nota: bind no ejecuta la funcion, lo que hace es retornar una funcion con ese contexto cambiado 
setTimeout(saludar.bind(kevin,'Que tal brother'),1000)
*/

saludar.call(kevin)
//El apply es similar al call, pero este los otros parametros los recibe en un array
saludar.apply(kevin, ['Hola brother'])
