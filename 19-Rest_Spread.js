/*
Parámetros REST: La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos
con un array 
*/

function sumar(a,b,...c){
    let resultado = a + b
    c.forEach(function(n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1,2,3,4,5,6));

/*
Operador Spread: Permite a un elemento iterable, tal como un arreglo o cadena, ser expandido en lugares donde
cero o más argumentos (para llamadas de función) o elementos (para array literales) son esperados, o a un 
objeto ser expandido en lugares donde cero o más pares de valores clave 
*/

const arr1 = [1,2,3,4,5],
 arr2 = [6,7,8,9,0];

console.log(arr1, arr2);

const arr3=[...arr1, ...arr2];
console.log(arr3);

