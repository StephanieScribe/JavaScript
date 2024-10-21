/* 

    Práctica Arreglos - Liga Superheroes

    1. Definir un arreglo llamado 'héroes' que contenga 5 nombres de superhéroes y muéstralo en la consola.

    2. Agrega un nuevo héroe al final de array.
    3. Eliminar el primer héroe.

    4. Cambiamos al 3er héroe por otro distinto.
    
    5. Ordenar alfabeticamente el arrar 'heroes'.

    6. Crear un nuveo array llamado enemigos, con los últimos 3 del array con un método.

    7. Mostrar por consola los dos arrays: héroes y enemigos.

*/

let superheroes = ["Batman", "El hombre que araña", "Spidergwen", "Deadpool", "Bakugou"];
superheroes.push("Black Panther")
superheroes.shift();
superheroes[2] = "Iron Man"
superheroes.sort();
let enemigos = superheroes.splice(2,5)
console.log(superheroes);
console.log(enemigos);
