/* 
Promesas 
Las promesas es usado para la computación asincrónica. Una promesa representa un valor 
que puede estar disponible ahora, en el futuro, o nunca.
*/

function cuadradoPromise(value){
    if(typeof value !== 'number'){
        return Promise.reject(`El valor ${value} ingresado no es un número`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random()*1000);
    });
}

cuadradoPromise(0)
.then((obj)=>{
    //console.log(obj);
    console.log("Inicio Promise")
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    return cuadradoPromise(1)
})
.then((obj)=>{
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    return cuadradoPromise(2);
})
.then((obj)=>{
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    return cuadradoPromise("3");
})
.then((obj)=>{
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    return cuadradoPromise(4);
})
.then((obj)=>{
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    return cuadradoPromise(5);
})
.then((obj)=>{
    console.log(`Promise: Valor: ${obj.value}, Resultado: ${obj.result}`);
    console.log("Fin Promise")
})
.catch(err => console.error(err));

