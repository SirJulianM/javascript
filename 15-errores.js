
/*try {
    console.log("En el Try se agrega el código a evaluar");
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally {
    console.log("El bloque finally se ejecutará siempre al final a un bloque de try-catch")
}*/

try {
    let numero = "Queens";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un número")
    }
    console.log(numero*numero);
} catch (error) {
    console.log(`Se produjo el siguiente error ${error}`)
}