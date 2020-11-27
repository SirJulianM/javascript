/*

Las constantes a diferencia de let o var, nunca pueden cambiar de valor y siempre debe estar definida

*/

const Pi = 3.1416
const nueve = 9 //Las constantes nunca pueden ser vacías
console.log(Pi);
console.log(nueve);

const objeto = {
    nombre: 'John',
    edad: 35
}

console.log(objeto);

objeto.correo = 'john@correo.com'

const colores = ['verde', 'amarillo']
colores.push("anaranjado");

console.log(objeto)
console.log(colores)

/* 

Si los valores son primitivos, no los vas a poder cambiar con constantes, pero si lo defines en valores 
compuestos si le vas a agregar o quitar valores

*/
