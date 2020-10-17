var x = 4, y = '4';
//Ahora a comparar objetos
var persona1 = {
    nombre : 'Kevin'
}
var persona2 = {
    nombre : 'Kevin'
}
//Al comparar objetos javaScript toma la referencia
//CUando se compara persona1==persona2 --> sera falso
//debido que tienen referencias distintas
var personaN = persona1;
//retornara true, ya que apunta al mismo objeto o lugar/espacio en memoria ram
//y en caso que se modifique persona1, automaticamente tambien se va modificar personaN
//ya que son el mismo objeto y las 2 variables, apuntan al mismo objeto
