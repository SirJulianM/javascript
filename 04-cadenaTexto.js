/*

String: Un objeto que representa una serie de caracteres dentro de una cadena

*/

let nombre = "Mónica"
let apellido = "Hincapié"
let saludo = new String('Hola señorita')
let lorem = "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length);
console.log(nombre.toLowerCase(), apellido.toUpperCase())
lorem.includes("amet");  //Busca una palabra dentro de la cadena de caracteres debe devolver un booleano
lorem.includes("Monik");
lorem.trim();   //Elimina los espacios que hay al principio o al final
lorem.split(",");    //Divide el dato en segmentos y los convierte en un arreglo