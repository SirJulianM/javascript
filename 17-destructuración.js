const numeros = [1,2,3,4]

//Sin destructuración

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
let cuatro = numeros[3];

//Con destructuración

const [one, two, three, four] = numeros

console.log(numeros);
console.log("Sin destructuración");
console.log(uno, dos, tres, cuatro);
console.log("Con destructuración");
console.log(one, two, three, four);

let persona = {
    nombre: "Andrés",
    apellido: "Madrid",
    edad: 7 
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);

/* 
    Nota: Cuando vayas a desestructurar un objeto, recuerda poner los mismos nombres, dado que pongas un nombre
    distinto, te aparecerá undefined
 */

let {name, lastname, age} = persona;
console.log(name, lastname, age);