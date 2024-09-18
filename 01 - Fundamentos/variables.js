/* 
  Variables 

  Las variables no son más que contnedores que almacenan datos.

  Para usar variables se declaran usando las palabras reservadas:

  var -> Es la forma tradicional, pero ya no se recomienda.
  let -> Es la forma moderna , es la más recomendada.
  const -> El dato almacenado no puede cambiar.

  Para declarar una variable:

  var [nombreVariable] = [valor];

*/

var nombre = "Stephanie Munyori";
let edad = 22;
const vivo = true;

console.log(nombre);
console.log(edad);
console.log(vivo);

/* 
  Las variables declaradas con 'var' y 'let' pueden cambiar a lo largo del código, siempre y cuando su alcance lo permita.

  Las variables declaradas con 'const' no pueden cambiar.
  Si lo intentamos marcará un error.

  Para cambiar el valor de una variable:

  [nombreVariable] = [nuevoValor]
*/

nombre  =  "Puchunguito"
edad = 22
/* vivo = false */

//Mostrar los nuevos datos
console.log(nombre);
console.log(edad);
console.log(vivo);