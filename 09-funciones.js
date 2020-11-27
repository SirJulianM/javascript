/* 
Una función es un bloque de código, autocontenido, independiente al ámbito global, que se define una sola
vez y se ejecuta en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un 
valor.
Las funciones de Javascript son objetos, un tipo especial de objetos.
Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden 
pasarse como argumentos y usarse como un valor de retorno
*/

//Declaración de funciones

function estoEsUnaFuncion(){
    console.log("Feliz aniversario #19 Queen");
    console.log("Vamos por la 17ma estrella");
}

function unaFuncionQueDevuelveUnValor(){
    return "La función ha retornado una cadena de texto"
}

function saludar(nombre, edad){
    console.log(`Hola, mi nombre ${nombre} y tengo ${edad} años`);
}

function funcionDeclarada(){
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada")
}

//Función anónima

const funcionExpresada = function() {
    console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición antes de su definición JS nos dirá")
}


//Invocación de funciones

estoEsUnaFuncion();
let funcion = unaFuncionQueDevuelveUnValor();
console.log(funcion)
saludar("Edward", 6)
funcionDeclarada();
funcionExpresada();

/* Nota: Si hay código después del return, esta no se ejecuta e ignora todo el código debajo de él */
