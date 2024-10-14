/* 
    Ejemplo condicionales if / else 

    1. Declarar una variable edad y le asignamos un valor numérico.
    2. Comprobamos si edad es igual o mayor que 18, mostramos el mesnaje: "¡Eres mauor de edad! 👵🏻".
    3. Si edad no es mauor que 18, mostramos el mensaje; "¡Eres un bebé! 👦🏻"

*/

/* 

let edad = 22;

if (edad >= 22) {
    console.log("Eres mayor de edad 👵🏻");
} else {
    console.log("Eres menor de edad 👧🏻");
} 
    
*/

/* 
    El operador ternario es una forma más concisa de escribir una condición if / else.

    Trabaja con tres operandos:

    1. Una condición 
    2. La expresión si la condición es verdadera.
    3. La expresión si la condición es falsa.

    Sintaxis:

    condicion ? expresionSiVerdadera : expresionSiFalsa

*/

let edad = 5;

let resultado = edad >= 22 ? "¡Eres mayor de edad! 👵🏻" : "Eres un bebé 👧🏻";

console.log(resultado)

let comprobarEdad =
(edad >= 18) && (edad < 30) ? "Eres jóven" : 
(edad >= 30) && (edad < 60) ? "Eres adulto" :
(edad >= 60) && (edad < 90) ? "Eres viejito" : "¡Eres inmortal!";