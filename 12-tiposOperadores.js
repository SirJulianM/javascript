/*
Operadores:

- Aritméticos: +, -, *, /, %, ()
- Relacionales: >, <, =>, <=, ==, ===, !=, !== 
- Lógicos: ! - Not : Niega, es decir lo que es verdadero, lo vuelve falso y viceversa, 
|| - or: Cuando tengo dos o más condiciones; si una de estas se cumple, el OR será verdadero
&& - and: Cuando tengo dos o más condiciones; si una de estas no se cumple, el AND no se validará

*/

//Aritméticos
let operaciones = 5 + (5 - 10) *3;
console.log(operaciones)
let modulo = 5 % 2
console.log(modulo)

//Relacionales
console.log(8>9);
console.log(9>8);
console.log(8>=9);
console.log(9>=8);
console.log(7<7);
console.log(7<=7);

/*
Pequeñas diferencias
 = : Es asignación de variables
 == : Igualdad en comparación de valores
 === : Comparación de tipo de dato y de valor
*/

console.log(7==7);
console.log("7" == 7);
console.log("7"=== 7);

//Incremento, decremento

let i = 1;

/*i = i + 2 -- Esta es otra forma de hacer incremento pero ya no es usada
También se puede usar i++, i--, --i, ++i, para incrementar o decrementar de a uno 
pero para mayor seguridad se recomienda usar los dos primeros
*/
i += 3
console.log(i)
i -=1
console.log(i)
i *=2
console.log(i)

//Lógicas
console.log(!true);
console.log(!false);
console.log("9"=== 9 || 9 === 9);
console.log("9"=== 9 && 9 === 9);

/*
*/

