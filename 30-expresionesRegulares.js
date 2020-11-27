/* 
Expresiones regulares: Son una secuencia de caracteres que forma un patrón de busqueda principalmente
utilizada para la busqueda de patrones de cadena de caracteres
*/

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum saepe, quos ullam aliquam similique dolores sit. Quod, ipsam nobis?"

let expReg = new RegExp("Lorem", "");
let expReg2 = /dolo/;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));