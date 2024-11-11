/* 

    Clases 

    Una clase en JS es una plantilla 

    Es una forma moderna y natural de trabajar con la programación, orientada a objetos.



    + Método constructor

    El método constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

    Dentro del método constructor pasamos las propiedades y valores de la clase.

    Las propiedades pasan como parámetros y luego se asigna con 'this'.

    Sintaxis básica 

    class NombreClase {
        // Método constructor

        constructor (par1, par2) {
            this.par1 = par1;
            this.par2 = par2;<
        }
    }

    Instancia de Clase 

    Para crear un objeto usando la clase, ser utiliza 'new', esto invoca al constructor de la clase.

    Sintaxis 

    new NombreClase(par1, par2);

    Esta instancia se asigna a una variable o constante.

    + Métodos de clase

    Se definen dentro de una clase y se asigna automáticamente en el 'prototipo' del obejto, este permite que todas las instancias compartan el mismo método. 

    Sintaxis

    nombreMetodo(param...) {
        // Código que se ejecuta
    }

*/

// Definir la clase Mascota

class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad nombre
        this.edad = edad; // Propiedad edad

    }

    saludo(){
        console.log(`¡Hola, me llamo ${this.nombre} y tengo ${this.edad} años!`)
    }
}

// Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota

let mascota1 = new Mascota("Benito", 12);
let mascota2 = new Mascota("Michi", 0);

// Accedemos a lo datos de las instancias

console.log(mascota1.nombre)
console.log(mascota1.edad)

// Lanzar los métodos de los objetos

mascota1.saludo();
mascota2.saludo();