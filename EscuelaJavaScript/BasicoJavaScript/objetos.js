var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    year: 2020,
    detalle: function(){
        console.log(`Auto ${this.modelo} ${this.year}`);
    }
};

miAuto.detalle();

//funcion constructura

function auto(marca, modelo, year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autos = [];
for(var i = 1; i < 31; i++){
   var marca = "marca" +i;
   var modelo = "modelo"+i;
   var year = "year"+i;
    var autoN = new auto(marca, modelo,year );
    //console.log(auto);
    autos.push(autoN);
}

for(var auto of autos){
    console.log(auto);
}

var auto1 = new auto("Toyota","Corola", 2020);
//Filtrar array de objetos
var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},    
    {nombre: "Laptop", costo:30000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifinos", costo:1700},
];
//filter --> retorna un array con los objetos que cumplan la condicion
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
//map --> retorna un array, con el dato o parametro requerido, en este 
//caso retorna un array de puros string, que son los nombres de los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})

//find, retorna un nuevo array, con los objetos que cumplan la condicion
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//for each
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some()    --> retorna true o false, en este caso retorna t/f
//en caso que en array de articulos hay algun articulo que cumpla esa 
//condicion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
}
    )