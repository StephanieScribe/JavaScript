/* 

    Práctica Clases y Objetos

    1. Crea una clase llamada Arma 

    Debe tener las siguientes propiedades en su constructor:

        * nombre (string): nombre del arma
        * tipo (string): tipo de arma (ej. "espada", "pistola", "arco").
        * daño (numero): cantidad de daño que puede causar.
        
    Agrega un método llamado describir que imprima en consola:

        `Arma: Galadhrim | Tipo: Arco | Daño: 40`

    2. Crea un objetyo llamado arsenal que contenga:
    
        * Una propiedad armas que sea un array vacío.
        * Un método agregarArma que recibe un arma como parámetro y la agrega al array armas.
        
    3. Instancia Armas 
        * Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo, daño.

    4. Agrega las armas al Arsenal
        * Usa el método agregarArma del objeto arsenal para agregar cada una de las armas al array armas.

    5. Muestra la descripción de las armas:

        * Usa un bucle for para recorrer el array armas dentro del objeto arsenal.
        * En cada iteración, llama al método describir de cada arma para mostrar sus detalles en la consola.

*/

class Armas {
    constructor(nombre, tipo, daño) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.daño = daño;
    }

    describir () {
        console.log(`Arma: $(this.nombre) /Tipo: $(this.tipo) /Daño $(this.daño)` )
    }
}

let armas1 = new Armas ("Cañón", "Bombas", "Revolver", 1000);

let arsenal = {
    Armas: [],
    agregarArma (Armas){
        this.Armas.push(Armas);
    }
}

let arma1 = new Armas ("Cañón", "arma de fuego", 300);
let arma2 = new Armas ("Bombas", "arma de fuego", 500);
let arma3 = new Armas ("Revolver", "arma de fuego", 400);

  
arsenal.agregarArma(arma1)
arsenal.agregarArma(arma2)
arsenal.agregarArma(arma3)

/* 
for (let i = 0; i < arsenal.armas.lenght; i++) {
    console.log(arsenal.armas[i])
}     
*/

for (let arma of arsenal.Armas){
    console.log(arma)
}