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

async function funcionAsincrona(){
    try {
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(0);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise("2");
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        console.log("Fin Async Function");
    } catch (error) {
        console.error(error);
    }
}

funcionAsincrona();

const funcionAsincronaExpresada = async() =>{
    try {
        console.log("Inicio Async Function");
        let obj = await cuadradoPromise(6);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(7);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(8);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(9);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise("10");
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        obj = await cuadradoPromise(11);
        console.log(`Async function: Value: ${obj.value}, Result: ${obj.result}`);
        console.log("Fin Async Function");
    } catch (error) {
        console.error(error);
    }
}

funcionAsincronaExpresada()