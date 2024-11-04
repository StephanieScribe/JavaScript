/* 

Recorrer arreglos

Podemos acceder a cada dato de un arreglo a través de su índice. Ya sea para obtener el dato o hacer algo con ese índice.

*/

/* Definir array */

let colores = [ "rojo", "negro", "verde", "azul", "rosa" ]
// Índices:        0      1         2

/* Imprimimos por consola los datos del array */

/* 

console.log(colores [0])
console.log(colores [1])
console.log(colores [2]) 

*/

colores.push("magenta");

/* Recorrer el array con el bucle for */

/* 

for ( let i = 0 ; i < colores.length ; i++ ) {
    // Código que se ejecuta
    console.log( colores [i] )
}

 */

/* 

    Bucle for...of

    Es una manera simple y moderna de recorrer arrays en JS. Este nos permite acceder directamente al valor de cada elemento sin necesidad de usar índices.

    Sintaxis 

    for ( const elemento of nombreArray ) {
        // Código a ejecutar por cada elemento en el array.
        
    }
*/

for ( const color of colores ) {
    // código a ejecutar

    console.log( `Colorcito: ${color}`)
}


let pokemones = [ "Sylveon", "Vaporeon", "Garchomp", "Gengar" ]

for ( const pokemon of pokemones ) {
    console.log( `Pokemones: ${pokemon}` )
}