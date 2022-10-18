// Arrow functions o funciones flecha
// Es la manera moderna de escribir una funcion
const esMayorDeEdad = (nombre, edad) => {
  // if : recibe una o varias condiciones
  // que deben cumplirse
  // para que se ejecute el código en su interior
  // pd: las condiciones se realizan con operadores "logicos"
  if (edad >= 18) {
    console.log(nombre, " es mayor de edad");
  }
  // else : debe estar anclado a un if previo
  // y se ejecutará si la condicion del if
  // no se cumple
  else {
    console.log(nombre, " es menor de edad");
  }
};

esMayorDeEdad("David", 35);
esMayorDeEdad("Mateo", 15);

// OPERADORES LOGICOS
// siempre devuelven uno de dos valores
// true: verdadero, false: falso

// 18 == "18"  : comparacion no estricta, sin tener en cuenta el "tipo"
// true

// 18 === "18" : comparacion estricta, teniendo en cuenta el "tipo"
// false

// 25 > 25  : mayor que, compara el tamaño de valores
// false

// 19 < 15 : menor que
// false

// >= : mayor o igual
// <= : menor o igual

// 25 != "25" : no igual, compara la diferencia entre valores sin verificar tipo
// false

// 25 !== "25" : igual que arriba pero estricto
// true

// (1>0) && (3<1) : && and, solicita que se cumplan todas las condiciones
// false

// (1>0) || (3<1) : || or, solicita que al menos UNA condicion se cumpla
// true
