/* 
  Concatenación

  La concatenación es un proceso para unir o combinar dos o más cadenas de texto en una sola.

  1. Operador (+) - Este es el método más comun para concatenar cadenas de texto.

  2. Template Strings, Plantilla de Cadenas o Literales. (``) - Alt + Ç | Alt + 9 + 6. Utilizamos los backtics o acentos invertidos, dentro podemos insertar cadenas de texto, variables y expresiones.



*/

// Concatenar con operador (+)

let nombre = "Stephanie";
let apellido = " Munyori";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// Concatenar con Template String

let saludo  = `Hola ${nombre} ${apellido}! ¿Cómo estás? Sabías que 2 + 2 es igual a ${2+2}`;

console.log(saludo);