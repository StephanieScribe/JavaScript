/* 

    Ejercicio funciones

    1. Vamos a definir una variable llamada 'heroe' que tenga un dato en 'string' con el nombre de un superhéroe.

    2. Definimos una función llamada: 'obtenerPoder'.

    3. Esta función recibe el parámetro 'heroe' que será validado en el cuerpo de la función.

    4. En el cuerpo de la función validar: 

        si heroe === "superman" -> "Tu poder es superfuerza"
        si heroe === "flash" -> "Tu poder es supervelocidad"
        si heroe === "batman" -> "Tu superpoder es supermillonario"
        si no -> "¡No te invitaron a la fiesta!"

    5. Invocar a la función con su parámetro 'heroe'

*/

/* let heroe = 'Batman'
function obtenerPoder() {
    console.log ("¡No te invitaron a la fiesta!")
} */

let heroe = prompt ("¿Qué heroe escojes, Batman, Flash, Iron Man?");

function obtenerPoder(heroe) {
    if (heroe === "Batman") {
        console.log("Tu poder es supermillonario");
    } else if (heroe === "Flash") {
        console.log("Tu poder es supervelocidad");
    } else if (heroe === "Iron Man") {
        console.log("Tu poder es superescudo");
    } else {
        console.log("No te invitaron a la fiesta")
    }
}

obtenerPoder(heroe) // Así invocamos la función