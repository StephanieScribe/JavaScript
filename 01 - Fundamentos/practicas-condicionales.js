/* 
    Practicas Condicionales 

    Siegue las instrucciones y escribe el código

    1. Declarar una variable llamada "edad" y asignarle un valor numérico.
    2. Imprimir por consola el valor de la variable "edad".
    3. Con el bloque "if", evaluar si "edad" es "mayor o igual" que "18".
    4. Si esta condición es "true", mostrar por consola el mensaje: "Eres mayor de edad!" 👴🏻
    5. Agregar otra condición con el bloque "else if" y evaluar si "edad" es menor que 18.
    6. Si esta condición es "true", mostrar por consola el mensaje: "Eres menor de edad 👧🏻"
    7. Con el bloque "else", evaluar cualquier otro dato, y en caso de que las condiciones anteriores sean falsas "false", mostrar por consola el mensaje: "Eres un alien 👽"
    8. Dentro de los bloques if,  else if y else, cambiar los "console.log", por "alert".
    9. Cambiar el valor de la variable "edad" por un "promt". Para que este dato sea introducido por el usuario y evaluando por las condicionales.

    promt ("¿Qué edad tienes?")
*/ 

let edad = promt ("¿Qué edad tienes?");
console.log(edad >= 18);

if (edad >= 18) {/* console.log */alert("Eres mayor de edad!")}
else if (edad < 18) {/* console.log */alert("Eres menor de edad")}else{/* console.log */alert("Eres un alien 👽")}