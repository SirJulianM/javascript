let a = 2;
let b = new Number(3);
let c = 7.19;
let d = "5.6";

console.log(a,b);
console.log(c.toFixed(1));   //Redondea número de acuerdo a la cantidad de decimales que deseamos.
console.log(a.toFixed(3));

console.log(parseInt(c));    //Te devuelve la parte entera de un formulario decimal
console.log(parseFloat(c));
console.log(typeof(c), typeof(d));
console.log(a+b);
console.log(c+parseFloat(d));

/* 
Dado que la variable d es String y contiene un número, esta se debe convertir a entero o flotante 
(dependiendo de que sea entero o no), para poder hacer cualquier operación con ella
*/
