/* 
Callbacks 
Una función de callback es una función que se pasa a otra función 
como un argumento, que luego se invoca dentro de la función externa 
para completar algún tipo de rutina o acción.

 Los callbacks a menudo se utilizan para continuar con la ejecución 
 del código después de que se haya completado una operación asincrónica
*/

function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*1000);
}

cuadradoCallback(1, (value, result) =>{
    console.log("Inicia Callback");
    console.log(`${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
        console.log(`${value}, ${result}`);
        cuadradoCallback(3, (value, result) => {
            console.log(`${value}, ${result}`);
            cuadradoCallback(4, (value, result) => {
                console.log(`${value}, ${result}`);
            })
        })
    })
})