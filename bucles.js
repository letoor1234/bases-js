// Los bucles son fragmentos de codigo
// que se ejecutaran una y otra vez
// según las condiciones que manejemos

// Tipo de variable "Array", arreglo, o matriz
// es una estructura que almacena multiples valores
// los valores pueden ser de tipos diferentes
const arreglo = [15, 25, 33, 12, 17];
// console.log("nuestro arreglo tiene ", arreglo.length, " elementos");
// la propiedad "length" de un array nos devuelve
// la cantidad de elementos del mismo en formato "number"

// nuestros arrays tienen elementos ordenados por
// "indices" o "posiciones"
// la primer posicion de todo array es 0
// para acceder a la posicion de un array
// nombre_del_array[indice: number]
console.log(arreglo[0]);

// bucle for
// a diferencia del if, no requiere una condicion
// requiere 3 elementos de configuracion
// (contador; condicion; resolucion_del_conteo)
for (let count = 0; count < arreglo.length; count++) {
  console.log("El elemento con indice ", count, " es ", arreglo[count]);
}
