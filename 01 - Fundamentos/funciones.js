/* 

  Funciones

  Son bloques de codigo reutilizables ya que realizan una tarea especifica ya que realizan el codigo de una y otra vez podemos asiganr una funcion para una sola vez y utilizar cuando querramos

  Conceptos de las funciones

  *Definir una funcion: Creamos una función con un nombre y los datos que llamamos parametros(opcionales)

  *Invocamos: llamamos la función cuando ocupamos que se ejecute su código, que haga su tarea

  *Retorna: Puede devolver un resultado la función (opcional)

  Sintaxis

   Funcion nombreFuncion(parametro1, parametro2, parametro3...) (//codigo que se ejecute return resultado;)

   function -> es la palabra clave para declarar una funcion 
   nombreFuncion -> Es el nombre que asignamos a la funcion, este nombre utilizamos para invocar.

   parm1, parm2 ... -> Son los datos que le pasamos a la función para que trabaje con ellos en su bloque de código.

   cuerpo de la funcion -> el código que ejecuta y realiza la tarea de la funcion.
  
   return -> devuelve o retorna  un resultado (opcional)
*/

function saludo() {
    console.log("Hola naríz de bola 🤣")
 }
 
 /* Saludo(); */
 
 function saludoPersonalizado(nombre) {
   console.log (`Hola querido ${nombre} tienes naríz de bola!!`)
 }
 
 /* saludoPersonalizado("OAAAAA") */
 
 function sumar (a, b) {
   return a + b 
 }
 
 let resultado = sumar (10,20)
 console.log ( resultado * 5)

 