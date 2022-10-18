// Esto es un comentario en linea
/*
    Esto es un comentario
    en bloque
*/
// VARIABLES
/*
    Es un espacio en la
    memoria de nuestro archivo
    que almacena un valor
*/
// const, let (palabra reservada)
// texto (nombre de nuestra variable)
// "Esto es..." (valor de nuestra variable)
const texto = "Esto es un texto"; // tipo string
const numero = 1.5; // tipo number
const booleano = false; // tipo boolean (false, true)

// const : no se puede redefinir
// let : si se puede redefinir el valor
let arreglo = [];

// console.log(numero);

// FUNCIONES
/*
    Bloques que almacenan la lógica 
    de un proyecyo,
    son reutilizables
*/
// function (palabra reservada)
// myFuncion (nombre de nuestra variable)
// nombre (parámetro, variable que utiliza la funcion de forma interna)
// { } (bloque de codigo)
// Declaración (o iniciacion)
function myFuncion(nombre) {
  console.log("Hola, ", nombre, ", que tal tu día?");
}
// Invocación
/*
    Es la utilización de una función
    que se escribió previamente
*/
myFuncion("David");
myFuncion("Angel");
myFuncion("Javito");
