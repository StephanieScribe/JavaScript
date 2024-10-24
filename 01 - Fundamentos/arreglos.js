/* 
    Arreglos o allays

    Son una estructura de datos que permiten almacenar  múltiples valores en una sola variable.

    Los array pueden contener datos de cualquier tipo: numeros, strings, booleans, incluso array anidados.


*/

let frutasFavoritas = ["limón" , "Uvas" , "Manzana"]
let numeroSuerte = [26 , 29 , 9 , 6 , 35]
let meQuiereNoMeQuiere = [true , false , false , true]
let nisDatos = ["Stephanie" , "Munyori" , 20 , true]
let anidandoArrays = [
    [123 , 456 , 789 , 321] ,
["Gato" ,"Perro" , "Pinguinos"] ,
[true , false , true]]

/* 
    array -> ["sandia" , "manzana" , "piña"]
    indice ->     0          1          2

    array -> [ 5 , 10 , 8 , 16 , 25 ]
    indice ->  0    1   2    3    4

*/

/* 
    Acceder a los elementos d eun array 

    Para acceder a un dato usamos la siguiente sintaxis: 

    nombreArray [indice];

*/

console.log( frutasFavoritas[2] );
console.log( numeroSuerte[1] );
console.log( anidandoArrays[2][2] )

/* 
Modificar elementos

Para cambiar el valor de cualquier elemento del array usamos la siguiente sintaxis

nombreArray[indice] = nuevoDato

*/

console.log( frutasFavoritas );
frutasFavoritas [0] = "naranja";
console.log( frutasFavoritas );

/* 

    Métodos útiles para los arrays

    Los métodos son funciones que trabajan con  los datos de los arrays su sintaxis es la    siguiente:

    1. nombreArray.nombreMetodo
    2. nombreArray.nombreMetodo(parametro)

*/

/* 
    Length nos dice cuantos elementos tiene un  array

*/

console.log( frutasFavoritas.length )
console.log( numeroSuerte.length)
console.log( anidandoArrays[0].length)

/* 
    push () - Agrega un elemento al final del array.

    nombreArray.push(dato)
*/

console.log(frutasFavoritas);
frutasFavoritas.push("Maracuyá");
console.log(frutasFavoritas);


/* 
    pop () - Eliminamos el último elemento del  array y lo devuelve.

    nombreArray.pop()

*/

console.log(numeroSuerte);

let numeroQuitado = numeroSuerte.pop()

console.log(numeroSuerte);

console.log(numeroQuitado);

/* 
    unshift() - Agrega un elemento al incio del array.

    nombreArray.unshift(dato)

*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("mandarina");

console.log(frutasFavoritas);

/* 
    shift() - Elimina el primer elemento del array y lo devuelve.

    nombreArray.shift()
*/

console.log(numeroSuerte);

let quitarPrimero = numeroSuerte.shift();

console.log(numeroSuerte);
console.log(quitarPrimero);

/*  

    indexOf() - Encuentra el índice de un elemento en el array.

    nombreArray.indexOf(dato);

*/

let indice = frutasFavoritas.indexOf("papaya");

console.log(indice)

 /* 
 
    splice() - Eliminar o agregar elementos al array desde una posición específica. 

    Eliminar

    nombreArray.splice(indiceInicio, indiceFinal);

    Agregar

    nombreArray.splice(indiceInicio, pasos, valor1, valor2)
 
 */

console.log(frutasFavoritas);

frutasFavoritas.splice(1,3);

console.log(frutasFavoritas);

frutasFavoritas.splice(1, 0, "fresa", "banana", "naranja", "aguacate")

console.log(frutasFavoritas);

/* 

    slice() - Crear una copia de una porción del array, No modifica el original, se crea un nuevo array. 

    nombreArray.slice(indiceInicio, indiceFinal);

*/

let frutasCopia = frutasFavoritas.slice(3,10)

console.log(frutasCopia)

/* 

    sort() - Ordena los elementos de un array de mayor a menor.

    nombreArray.sort() - No pasamos datos entre parentesis.

*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);

console.log(numeroSuerte);

numeroSuerte.sort();

console.log(numeroSuerte);

