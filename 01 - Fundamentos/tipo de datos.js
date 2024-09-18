/* 
  Tipos de datos 

  Los tipos de datos se dividen en dos categorías: Primitivos y Complejos 

  1. Tipos de datos Pimitivos 

  Datos básicos que no se consideran "objetos" y no tienen "metodos"

  "Number o Número"

  Representación de valores numéricos, ya sen enteros o con decimales (punto flotante).

  * String o cadena de Caracteres

  Se usa para representar texto. el texto se coloca entre comillas dobles o simples "texto" 'text'

  * Boolean o Boleanos

  Estos representan un valor lógico que puede ser 'true' o 'false'

  *Undefined o Indefinido 

  Es el valor que se le asigna a una variable que ha sido declarada, pero no inicializada.

  
  2. Tipos de datos complejos 

  * Array o Arreglo 

  Es un conjunto de datos que los almacenan en una lista ordenada de elementos. Los datos dentro de los arreglos entre corchetes [] y separados por comas ,

*/

/* Numbers */

let miNumero = 5;
let miNumeroDecimal = 6.1416; 

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */

let miNombre = 'Stephanie';
let miApellido = "Munyori";

console.log(miNombre);
console.log(miApellido);

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; // Declarar un variable sin inicilizarla

console.log(x); // Undefined 

x = prompt("¿Cuál es tu número favorito?");

console.log(x); // Valor que el usuario introduzca.

/* Array */

let misFrutasFavoritas = ["Durazno", "Uvas", "Manzana"];
let misNumerosSuerte = [1, 4, 7];
let otroArray = ["Puchunguito", 56, true];

console.log(misFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);
