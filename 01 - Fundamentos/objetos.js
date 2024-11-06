/* 

    Los métodos describen los comportamientos del objeto.

    Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones. 

    Sintaxis 

    let nombreObjeto = {
        // Propiedades y métodos
    };

    propiedades dentro de ub objeto ser escriben en pares "claves" : "valor"

    let nombre = "Stephanie" // Variable

    nombre : "Stephanie" // Propiedad

    Las propiedades de un objeto se separan por comas ',' después del valor.

    Las claves de las propiedades pueden tener más de una palabra. Pero se deberían escribir entre comillas "" o ''

    "nombre real" = "Stephanie",

    Tambien se pueden escribir en formato Camel Case y sin comillas 

    nombreReal = "Steph",

*/

/* Definir un objeto */

let personaje = {
    nombre : "Sherlock Holmes",
    edad : 60,
    residencia : "Baker Street",
    poderes : false,
    habilidadesHumanas : ["Deducción", "Inteligencia", "Astucia"]
}

/* Accedemos al valor de las propiedades del objeto */

console.log(personaje.nombre);
// console.log(personaje["habilidades humanas"][1] );
console.log(personaje.habilidadesHumanas[0] )

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["Moriarty", "Norbury"]; // Agregar

delete personaje.poderes // Borrar

/* 

    sus respectivos valores

    Anidamos objetos

    Nombramos  al objeto anidado y lo definimos con las llaves {} - Dentro de las llaves se delaran las propiedades en pares "clave" : "valor"

    Métodos 

    Un método es una función que se define como propiedad de un objeto.

    Sintaxis

    nombreClave : function(parametros) {
        // Código nque se ejecuta
    }

    this

    Es una palabra reservada 

*/

let mascota = {
    nombre : "Benito",
    tipo : "Gato",
    edad : 13,

    // Objeto Anidado
    fisico : {
        estatura : 20,
        peso : 5,
        color : "anaranjado"
    },

    // Declaramos un método 
    saludo : function(amo) {
        // Código que se ejecuta al invocar la función
        alert(`¡miau miau miau! Me llamo ${this.nombre} y mi amo es ${amo}`)
    }

}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.color);

mascota.fisico.colorOjos = "azul"; // Agregar 
delete mascota.fisico.color; // Eliminamos

/* Accedemos al método saludo del objeto mascota */

mascota.saludo("Stephanie");